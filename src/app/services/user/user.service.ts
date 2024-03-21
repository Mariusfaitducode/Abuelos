import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http : HttpClient,
    private firebaseService : FirebaseService) { 

    this.userSubject = new BehaviorSubject<User | null>(null);
  }

  url : string = 'http://localhost:3001/';

  private userSubject: BehaviorSubject<User | null>;


  postUser(user : User){
    return this.http.post(this.url + 'api/users', user);
  }

  getUser(){
    return this.userSubject.asObservable();
  }

  getUserWithToken(){
    
    let token = localStorage.getItem('token');
    let headers = { 'Authorization' : 'Bearer ' + token };

    return this.http.get(this.url + 'api/users/getUserWithToken', { headers }).pipe(tap({
      next: res => { 

        this.userSubject.next(res as User);

        console.log('Response get user w token:', res); 
      },
      error: err => { 
        console.error('Error:', err); 
      }
    }));
  }

  updateUser(user : User){

    let token = localStorage.getItem('token');
    let headers = { 'Authorization' : 'Bearer ' + token };

    return this.http.put(this.url + 'api/users', user, { headers }).pipe(tap({
      next: res => { 
        console.log('Response update user:', res); 
        this.getUserWithToken().subscribe();
      },
      error: err => { 
        console.error('Error:', err); 
      }
    }));
  }

  searchUserWithId(id : string){
    return this.http.get(this.url + 'api/users/' + id);
  }

  updateUserWithoutFile(user : User){
      
      
  }
}
