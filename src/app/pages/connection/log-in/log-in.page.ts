import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  constructor(
    private router : Router,
    private userService : UserService) { }

  newUser : User = new User();


  ngOnInit() {
  }

  validForm(){
    return this.newUser.pseudo != "" && this.newUser.password != "";
  }

  logIn(){
    console.log(this.newUser);

    this.userService.postUser(this.newUser).subscribe((res : any) => {
      console.log(res);
    });
  }

  goToSignUpPage(){
    this.router.navigate(['/log-in']);
  }

  goToHomePage(){
    this.router.navigate(['/tabs/home']);
  }

}
