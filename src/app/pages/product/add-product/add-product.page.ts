import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Field } from 'src/app/models/field';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ImageService } from 'src/app/services/images/image.service';
import { FieldService } from 'src/app/services/product/field.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private productService : ProductService,
    private firebaseService : FirebaseService,
    private imageService : ImageService,
    private userService : UserService,
    private fieldService : FieldService,

  ) { }

  product : Product = new Product();

  user : User | null = null;
  userFields : Field[] = [];


  file: File | null = null;

  modify : boolean = false;


  ngOnInit() {

    this.route.params.subscribe((params : any) => {

      this.userService.getUser().subscribe(user => {
        this.user = user;
  
        this.fieldService.getFields().subscribe(fields => {

          this.userFields = [];

          for (let fieldId of this.user!.fields){
            
            let field = fields.find(f => f.uid === fieldId);

            if (field){
              this.userFields.push(field);
            }
          }

          console.log('User fields found:', this.userFields)

        });
        
      });

      if (params.id){
        this.productService.getProducts().subscribe(products => {
          if (products.length > 0){
            this.product = products.find((p : Product) => p.uid == params.id)!;
            this.modify = true;
            
          }
        });
      }
    });

  }

  goBackButton(){
    this.router.navigate(['tabs/profile']);
  }

  fileUpload(event : any){

    this.file = event.target.files[0];
  }


  canAddProduct(){
    // return this.product.name != '' && this.product.variety != ''
    //  && this.product.origin != '' && this.product.season != '' 
    //  && this.product.field != '' && this.product.description != '' 
    //  && this.product.price != 0 
    //  && this.product.stock != 0 && this.product.next_harvest != null 
    //  && this.product.limit_date != null;
    return true;
  }

  validFormProduct(){
    if(this.file != null){

      this.imageService.uploadProductImage(this.product, this.file).then(url => {
        this.product.image = url;
        
        this.addOrUpdateProduct();
      });
    }
    else {
      this.addOrUpdateProduct();
    }
  }

  addOrUpdateProduct(){
    this.productService.addProduct(this.product).subscribe(res => {

      let product = res as Product;

      let field = this.userFields.find(f => f.uid === product.field);

      if (field && !this.modify){
        
        field.products.push(product.uid);

        this.fieldService.addOrUpdateField(field).subscribe(res => {
          console.log('Field updated:', res);
        });
      }

      // console.log(res);
      this.router.navigate(['tabs/home']);
    });
  }
}
