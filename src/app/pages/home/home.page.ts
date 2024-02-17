import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {


  products : any = [];

  constructor(
    private router : Router,
    private productService : ProductService) {}

  ngOnInit() {
    // this.productService.getProducts().subscribe((res : any) => {
    //   this.products = res.products;
    //   console.log(this.products)

    // });
  }

  goToSignUpPage(){
    // console.log('go to sign up page');
    this.router.navigate(['/sign-up']);

  }
}
