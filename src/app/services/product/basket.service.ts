import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { FirebaseService } from '../firebase.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(
    private http : HttpClient,
    private userService : UserService) { }


    url : string = 'http://localhost:3001/';


  addProductInBasket(product : Product, quantity : number = 1){
    
    let token = localStorage.getItem('token');
    let headers = { 'Authorization' : 'Bearer ' + token };

    let body = {
      productId : product.uid,
      quantity : quantity
    }

    return this.http.post(this.url + 'api/basket/addProductInBasket', body, { headers }).pipe(tap({
      next: res => { 
        console.log('Response add product :', res); 

        // Recharger le user pour avoir les nouvelles données
        this.userService.getUserWithToken().subscribe();
      },
      error: err => { 
        console.error('Error:', err); 
      }
    }));
  }


  updateProductInBasket(product : Product, quantity : number = 1){
    
    let token = localStorage.getItem('token');
    let headers = { 'Authorization' : 'Bearer ' + token };

    let body = {
      productId : product.uid,
      quantity : quantity
    }

    return this.http.post(this.url + 'api/basket/updateProductInBasket', body, { headers }).pipe(tap({
      next: res => { 
        console.log('Response add product :', res); 

        // Recharger le user pour avoir les nouvelles données
        this.userService.getUserWithToken().subscribe();
      },
      error: err => { 
        console.error('Error:', err); 
      }
    }));
  }
}
