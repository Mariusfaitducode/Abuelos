import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderItem, Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { BasketService } from 'src/app/services/product/basket.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private productService : ProductService,
    private userService : UserService,
    private basketService : BasketService) { }


  product : Product | null = null;

  user : User | null = null;

  order : OrderItem | null = null;

  
  ngOnInit() {

    this.route.params.subscribe((params : any) => {

      if (params.id){
        this.productService.getProducts().subscribe(products => {
          if (products.length > 0){
            this.product = products.find((p : any) => p._id == params.id)!;

            this.order = {
              productId : this.product!._id,
              quantity : 0
            }

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


  addQuantity(){
    if (this.order){
      this.order.quantity++;
    }
  }

  removeQuantity(){
    if (this.order){
      if (this.order.quantity > 0){
        this.order.quantity--;
      }
    }
  }

  addProductInBasket(){

    this.basketService.addProductInBasket(this.product!, this.order!.quantity).subscribe((res : any) => {
      console.log('Response:', res);
    });
  }

  goBack(){
    window.history.back();
  }

  dayLeft(date : Date){
    let today = new Date();
    let limitDate = new Date(date);
    let diff = limitDate.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  }
}
