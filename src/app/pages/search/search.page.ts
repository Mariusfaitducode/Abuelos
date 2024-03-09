import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { ProductService } from 'src/app/services/product/product.service';
import { SellerService } from 'src/app/services/user/seller.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(
    private router : Router,
    private productService : ProductService,
    private sellerService : SellerService
  ) { }

  products : Product[] = [];

  sellers : User[] = [];


  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });

    this.sellerService.getSellers().subscribe(sellers => {
      this.sellers = sellers;
    });

  }

}
