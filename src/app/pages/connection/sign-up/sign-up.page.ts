import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
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
    private userService : UserService) { }

  newUser : User = new User();

  passwordConfirmation : string = "";

  errorMessage : string = "";

  ngOnInit() {
  }

  
  validForm(){
    return this.newUser.firstname != "" && this.newUser.lastname != "" && this.newUser.pseudo != "" && this.newUser.email != "" && this.newUser.password != "";
  }
  
  validPassword(){
    return this.newUser.password.length >= 6;
  }

  verifyPasswordConfirmation(){
    return this.newUser.password == this.passwordConfirmation;
  }


  signUp(){

    this.authService.signUp(this.newUser).subscribe({
      next: (res : any) => {
        console.log(res);
        this.errorMessage = res.error.message;
        this.router.navigate(['/log-in']);
      },
      error: (res : HttpErrorResponse) => {
        console.log(res);
        this.errorMessage = res.error.message;
      }
    });
  }


  goToLogInPage(){
    this.router.navigate(['/log-in']);
  }

  goToHomePage(){
    this.router.navigate(['/tabs/home']);
  }

}
