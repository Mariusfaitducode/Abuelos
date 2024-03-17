import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ProductService } from 'src/app/services/product/product.service';

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
  ) { }

  product : Product = new Product();

  file: File | null = null;

  ngOnInit() {

    this.route.params.subscribe((params : any) => {

      if (params.id){
        this.productService.getProducts().subscribe(products => {
          if (products.length > 0){
            this.product = products.find((p : Product) => p.uid == params.id)!;

            // this.userService.getUser().subscribe(user => {
            //   this.user = user;
        
            //   if (this.user){
            //     // this.order = this.user.basket.find(item => item.productId === this.product!._id) || null;

            //     // console.log('Order:', this.order);

            //     if (this.order == null){
                    // this.order = {
                    //   productId : this.product!._id,
                    //   quantity : 0
                    // } 
            //     }
            //   }
            // });
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

  addProduct(){
    if(this.file != null){

      this.firebaseService.uploadProductImage(this.product, this.file).then(url => {
        this.product.image = url;
        this.productService.addProduct(this.product).subscribe(res => {
          // console.log(res);
          this.router.navigate(['tabs/home']);
        });
      });
    }
    else {
      this.productService.addProduct(this.product).subscribe(res => {
        // console.log(res);
        this.router.navigate(['tabs/home']);
      });
    }
  }
}
