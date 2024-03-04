import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  url : string = 'http://localhost:3001/';



  signUp(user : User){

    return this.http.post<User>(this.url + 'api/auth/signup', user).pipe(tap({
      next: res => { console.log('Response:', res); },
      error: err => { console.error('Error:', err); }
    }));
  }
  

  logIn(user : User){

    return this.http.post<User>(this.url + 'api/auth/login', user).pipe(tap({
      next: res => { console.log('Response:', res); },
      error: err => { console.error('Error:', err); }
    }));
  }

  disconnect(){
    localStorage.removeItem('token');
    // this.router.navigate(['/log-in']);
  }


  setToken(token : string){
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
