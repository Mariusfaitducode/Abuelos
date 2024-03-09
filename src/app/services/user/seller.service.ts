import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http : HttpClient) { }

  url : string = 'http://localhost:3001/';

  private sellersSubject = new BehaviorSubject<User[]>([]);

  loadSellers(){
    return this.http.get(this.url + 'api/users/sellers').pipe(tap({
      next: res => { 
        this.sellersSubject.next(res as User[]);
        console.log('Response:', res); 
      },
      error: err => { 
        console.error('Error:', err); 
      }
    }));
  }

  getSellers(){
    return this.sellersSubject.asObservable();
  }
}
