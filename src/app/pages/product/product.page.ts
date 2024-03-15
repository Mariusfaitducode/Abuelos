import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
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
    private userService : UserService) { }


  product : Product = new Product();

  
  ngOnInit() {

    this.route.params.subscribe((params : any) => {

      if (params.id){
        this.productService.getProducts().subscribe(products => {
          if (products.length > 0){
            this.product = products.find((p : any) => p._id == params.id)!;
          }
        });
      }
    });
  }

  addProductInBasket(){
    this.userService.addProductInBasket(this.product).subscribe((res : any) => {
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
