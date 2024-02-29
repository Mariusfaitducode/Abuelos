import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(
    private router : Router,
    private productService : ProductService
  ) { }

  products : Product[] = [];


  ngOnInit() {
    this.productService.getProducts().subscribe((res : any) => {
      this.products = res;
      console.log(res)

    });
  }

}
