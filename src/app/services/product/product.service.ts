import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  url : string = 'http://localhost:3001/';


  products : Product[] = [];


  loadProducts(){
    return this.http.get(this.url + 'api/products').pipe(tap({
      next: res => { 
        this.products = res as Product[];
        console.log('Response:', res); 
      },
      error: err => { 
        console.error('Error:', err); 
      }
    }));
  }

  getProducts(){
    return this.products;
  }
}
