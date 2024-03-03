import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(
    private router : Router,
    private productService : ProductService) {}


  products : Product[] = [];

  ngOnInit() {

    this.productService.loadProducts().subscribe((res : any) => {
      this.products = this.productService.getProducts();
      console.log(res)

    });
  }

  goToSignUpPage(){
    // console.log('go to sign up page');
    this.router.navigate(['/sign-up']);

  }
}
