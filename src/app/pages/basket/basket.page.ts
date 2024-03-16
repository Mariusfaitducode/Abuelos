import { Component } from '@angular/core';
import { OrderItem, Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { BasketService } from 'src/app/services/product/basket.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'basket.page.html',
  styleUrls: ['basket.page.scss']
})
export class BasketPage {

  constructor(
    private userService : UserService,
    private productService : ProductService,
    private basketService : BasketService) {}

  products : Product[] = [];

  user : User | null = null;

  basket : OrderItem[] = [];


  ngOnInit(){

    this.productService.getProducts().subscribe(products => {
      this.products = products;

      this.userService.getUser().subscribe(user => {
        this.user = user;
  
        if (this.user){
          this.basket = this.user.basket.map(item => {
            let product = this.products.find(product => product._id === item.productId);
            return {
              productId: item.productId,
              product: product ? product : new Product(),
              quantity: item.quantity
            }
          });
        }
      });
    });

    

    // this.route.queryParams.subscribe(params =>{
    //   console.log(this.user);
    // })
  }


  addQuantity(order : OrderItem){
    console.log("ADD")
    console.log(order);
    this.basketService.updateProductInBasket(order.product!, order.quantity+1).subscribe();
  }

  removeQuantity(order : OrderItem){
    console.log("REMOVE")
    console.log(order)
    this.basketService.updateProductInBasket(order.product!, order.quantity-1).subscribe();
  }

}
