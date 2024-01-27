import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http : HttpClient) { 

    console.log("Product Service is working");
    // console.log(this.getProducts())

    this.getProducts().subscribe((data)=>{
      
      console.log("Data from getProducts() in product-service.service.ts");
      console.log(data);

    })
  }

  getProducts(){
    return this.http.get('http://localhost:3000/api/products');
  }
}
