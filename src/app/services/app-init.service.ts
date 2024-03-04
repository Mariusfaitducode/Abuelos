import { Injectable } from '@angular/core';
import { UserService } from './user/user.service';
import { ProductService } from './product/product.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(
    private userService: UserService,
    private productService: ProductService) {}

  init() {
    const token = localStorage.getItem('token');

    this.productService.loadProducts().subscribe();

    if (token) {
      this.userService.getUserWithToken().subscribe();
    }
  }
}
