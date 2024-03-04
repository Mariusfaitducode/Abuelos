import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/user/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  constructor(
    private router : Router,
    private authService : AuthService,
    private userService : UserService) { }

  newUser : User = new User();


  ngOnInit() {
  }


  // Navigation

  goToSignUpPage(){
    this.router.navigate(['/sign-up']);
  }

  goToHomePage(){
    this.router.navigate(['/tabs/home']);
  }


  // Form


  validForm(){
    return this.newUser.email != "" && this.newUser.password != "";
  }

  logIn(){
    console.log(this.newUser);
  
    this.authService.logIn(this.newUser).subscribe((res : any) => {
      if (res.error){
        console.log(res.error);
      } 
      else {
        console.log(res);

        this.authService.setToken(res.token);

        this.userService.getUserWithToken().subscribe((res : any) => {
          console.log(res);

          this.router.navigate(['tabs/profile']);
        });
      }
    });
  }

  

}
