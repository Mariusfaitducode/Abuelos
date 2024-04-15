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
  selector: 'app-add-field',
  templateUrl: './add-field.page.html',
  styleUrls: ['./add-field.page.scss'],
})
export class AddFieldPage implements OnInit {

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private fieldService : FieldService,
    private firebaseService : FirebaseService,
    private imageService : ImageService,
    private userService : UserService
  ) { }

  field : Field = new Field();

  file: File | null = null;

  user : User | null = null;

  modify : boolean = false;

  ngOnInit() {

    this.route.params.subscribe((params : any) => {

      this.userService.getUser().subscribe(user => {
        this.user = user;

        if (this.user){
          this.field.farmerId = this.user.uid;
        }

      });

      if (params.id){

        this.fieldService.getFields().subscribe(fields => {

          if (fields.length > 0){
            this.field = fields.find((f : Field) => f.uid == params.id)!;
            this.modify = true;
          }
        });


      }

      // if (params.id){
      //   this.productService.getProducts().subscribe(products => {
      //     if (products.length > 0){
      //       this.field = products.find((p : Product) => p.uid == params.id)!;

      //       // this.userService.getUser().subscribe(user => {
      //       //   this.user = user;
        
      //       //   if (this.user){
      //       //     // this.order = this.user.basket.find(item => item.productId === this.product!._id) || null;

      //       //     // console.log('Order:', this.order);

      //       //     if (this.order == null){
      //               // this.order = {
      //               //   productId : this.product!._id,
      //               //   quantity : 0
      //               // } 
      //       //     }
      //       //   }
      //       // });
      //     }
      //   });
      // }
    });

  }

  goBackButton(){
    this.router.navigate(['tabs/profile']);
  }

  fileUpload(event : any){

    this.file = event.target.files[0];
  }

  canAddField(){
    return this.field.name != '' && this.field.description != '';
  }

  addField(){
    if(this.file != null){

      this.imageService.uploadFieldImage(this.field, this.file).then(url => {
        this.field.image = url;
        this.fieldService.addField(this.field).subscribe(res => {
          // console.log(res);

          let field = res as Field;

          if (!this.modify){
            this.user?.fields.push(field.uid);

            this.userService.updateUser(this.user!).subscribe(res => {
              console.log(res);
              this.router.navigate(['tabs/profile']);
            });
          }
          else{
            this.router.navigate(['tabs/profile']);
          }
        });
      });
    }
    else {
      this.fieldService.addField(this.field).subscribe(res => {
        // console.log(res);

        let field = res as Field;

        if (!this.modify){
          this.user?.fields.push(field.uid);

          this.userService.updateUser(this.user!).subscribe(res => {
            console.log(res);
            this.router.navigate(['tabs/profile']);
          });
        }
        else{
          this.router.navigate(['tabs/profile']);
        }
      });
    }
  }

  removeField(){
    this.fieldService.removeField(this.field).subscribe(res => {
      console.log(res);

      this.user!.fields = this.user?.fields.filter(f => f != this.field.uid)!;

      this.userService.updateUser(this.user!).subscribe(res => {
        console.log(res);
        this.router.navigate(['tabs/profile']);
      });
    });
  }
}
