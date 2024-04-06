import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Field } from 'src/app/models/field';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor(private http : HttpClient) { }

  url : string = 'http://localhost:3001/';


  // private productsSubject = new BehaviorSubject<Product[]>([]);


  // loadProducts(){
  //   return this.http.get(this.url + 'api/products').pipe(tap({
  //     next: res => { 
  //       this.productsSubject.next(res as Product[]);
  //       console.log('Response:', res); 
  //     },
  //     error: err => { 
  //       console.error('Error:', err); 
  //     }
  //   }));
  // }

  addField(field : Field){
    return this.http.post(this.url + 'api/products/addField', field).pipe(tap({
      next: res => { 
        console.log('Response:', res); 
        // this.loadProducts().subscribe();
      },
      error: err => { 
        console.error('Error:', err); 
      }
    }));
  }

  // getProducts(){
  //   return this.productsSubject.asObservable();
  // }
}
