import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  url : string = 'http://localhost:3001/';


  postUser(user : User){
    return this.http.post(this.url + 'api/users', user);
  }

  getUser(){
    
    let token = localStorage.getItem('token');
    let headers = { 'Authorization' : 'Bearer ' + token };

    return this.http.get(this.url + 'api/users/getUserWithToken', { headers }).pipe(tap({
      next: res => { console.log('Response:', res); },
      error: err => { console.error('Error:', err); }
    }));
  }


  getUserInStorage(){
    return localStorage.getItem('user');
  }


  addProductInBasket(product : Product){
    
    let token = localStorage.getItem('token');
    let headers = { 'Authorization' : 'Bearer ' + token };

    let body = {
      productId : product._id,
      quantity : 1
    }

    return this.http.post(this.url + 'api/basket/addProductInBasket', body, { headers }).pipe(tap({
      next: res => { console.log('Response:', res); },
      error: err => { console.error('Error:', err); }
    }));
  }
}
