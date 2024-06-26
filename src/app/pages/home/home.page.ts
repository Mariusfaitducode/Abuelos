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

    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });

  }

  goToSignUpPage(){
    // console.log('go to sign up page');
    this.router.navigate(['/sign-up']);
  }


  goToConceptPage(){
    // console.log('go to concept page');
    this.router.navigate(['/concept']);
  }

  goToOperationPage(){
    // console.log('go to operation page');
    this.router.navigate(['/operation']);
  }

  goToRepartidorPage(){
    // console.log('go to repartidor page');
    this.router.navigate(['/repartidor']);
  }
}
