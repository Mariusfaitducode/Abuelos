import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(
    private router : Router,
    private userService : UserService) { }

  newUser : User = new User();

  passwordConfirmation : string = "";

  ngOnInit() {
  }

  validForm(){
    return this.newUser.firstname != "" && this.newUser.lastname != "" && this.newUser.pseudo != "" && this.newUser.email != "" && this.newUser.password != "";
  }

  validPassword(){
    return this.newUser.password == this.passwordConfirmation;
  }

  signUp(){

    this.userService.postUser(this.newUser).subscribe({
      
      next: (res : any) => {
        console.log(res);
        this.router.navigate(['/log-in']);
      },
      error: (err : any) => {
        console.log(err);
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
