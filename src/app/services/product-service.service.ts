import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http : HttpClient) { 

    console.log("Product Service is working");
    // console.log(this.getProducts())
  }

  getProducts(){
    return this.http.get('http://localhost:3000/api/products');
  }
}
