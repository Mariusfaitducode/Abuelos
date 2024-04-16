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


  private fieldsSubject = new BehaviorSubject<Field[]>([]);


  loadFields(){
    return this.http.get(this.url + 'api/fields/getFields').pipe(tap({
      next: res => { 
        this.fieldsSubject.next(res as Field[]);
        console.log('Response get fields:', res); 
      },
      error: err => { 
        console.error('Error:', err); 
      }
    }));
  }

  addOrUpdateField(field : Field){
    return this.http.post(this.url + 'api/fields/addField', field).pipe(tap({
      next: res => { 
        console.log('Response post field:', res); 
        this.loadFields().subscribe();
      },
      error: err => { 
        console.error('Error:', err); 
      }
    }));
  }

  getFields(){
    return this.fieldsSubject.asObservable();
  }

  removeField(field : Field){
    return this.http.delete(this.url + 'api/fields/removeField/' + field.uid).pipe(tap({
      next: res => { 
        console.log('Response remove field:', res); 
        this.loadFields().subscribe();
      },
      error: err => { 
        console.error('Error:', err); 
      }
    }));
  }
}
