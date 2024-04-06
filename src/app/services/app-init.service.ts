import { Injectable } from '@angular/core';
import { UserService } from './user/user.service';
import { ProductService } from './product/product.service';
import { SellerService } from './user/seller.service';
import { FieldService } from './product/field.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(
    private userService: UserService,
    private productService: ProductService,
    private sellerService : SellerService,
    private fieldService : FieldService) {}

  init() {
    const token = localStorage.getItem('token');

    this.productService.loadProducts().subscribe();

    this.sellerService.loadSellers().subscribe();

    this.fieldService.loadFields().subscribe();

    this.sellerService.loadAllUsers().subscribe();

    if (token) {
      this.userService.getUserWithToken().subscribe();
    }
  }
}
