import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AuthService } from 'src/app/services/user/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(
    private router : Router,
    private authService : AuthService,
    private userService : UserService,
    private firebaseService : FirebaseService) { }

  newUser : User = new User();

  password : string = "";

  passwordConfirmation : string = "";

  errorMessage : string = "";

  ngOnInit() {
  }

  
  validForm(){
    return this.newUser.firstname != "" && this.newUser.lastname != "" && this.newUser.pseudo != "" && this.newUser.email != "" && this.password != "";
  }
  
  validPassword(){
    return this.password.length >= 6;
  }

  verifyPasswordConfirmation(){
    return this.password == this.passwordConfirmation;
  }


  signUp(){
    this.errorMessage = '';

    this.authService.signUpWithEmail(this.newUser, this.password)
    .then((res : any) => {
      console.log(res);
      this.router.navigate(['/log-in']);
    }).catch((error : any) => {
      console.log(error);
      this.errorMessage = error.message;
    });
  }


  goToLogInPage(){
    this.router.navigate(['/log-in']);
  }

  goToHomePage(){
    this.router.navigate(['/tabs/home']);
  }

}
