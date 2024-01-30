import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  url : string = 'http://localhost:3000/';

  getProducts(){
    return this.http.get(this.url + 'api/products');
  }
}
