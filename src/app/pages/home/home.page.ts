import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {


  products : any = [];

  constructor(private productService : ProductServiceService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((res : any) => {
      this.products = res.products;
      console.log(this.products)

    });
  }
}
