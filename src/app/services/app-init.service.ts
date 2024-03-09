import { Injectable } from '@angular/core';
import { UserService } from './user/user.service';
import { ProductService } from './product/product.service';
import { SellerService } from './user/seller.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(
    private userService: UserService,
    private productService: ProductService,
    private sellerService : SellerService) {}

  init() {
    const token = localStorage.getItem('token');

    this.productService.loadProducts().subscribe();

    this.sellerService.loadSellers().subscribe();

    if (token) {
      this.userService.getUserWithToken().subscribe();
    }
  }
}
