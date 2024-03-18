import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthErrorCodes } from 'firebase/auth';
import { User } from 'src/app/models/user';
import { FirebaseService } from 'src/app/services/firebase.service';
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
    private userService : UserService,
    private firebaseService : FirebaseService) { }

  newUser : User = new User();

  password : string = "";

  errorMessage : string = "";


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
    return this.newUser.email != "" && this.password != "";
  }

  loginWithEmail(){
    console.log(this.newUser);
  
    // this.authService.logIn(this.newUser).subscribe((res : any) => {
    //   if (res.error){
    //     console.log(res.error);
    //   } 
    //   else {
    //     console.log(res);

    //     this.authService.setToken(res.token);

    //     this.userService.getUserWithToken().subscribe((res : any) => {
    //       console.log(res);

    //       this.router.navigate(['tabs/profile']);
    //     });
    //   }
    // });

    this.authService.loginWithEmail(this.newUser, this.password)
    .then((res : any) => {

      this.userService.getUserWithToken().subscribe((res : any) => {
        console.log(res);

        this.router.navigate(['tabs/profile']);
      });
    }).catch((error : any) => {
      console.log(error);
      this.errorMessage = error.message;
    });
  }

  loginWithGoogle(){
    this.authService.loginWithGoogle()
    .then((res : any) => {

      this.userService.getUserWithToken().subscribe((res : any) => {
        console.log(res);

        this.router.navigate(['tabs/profile']);
      });
    }).catch((error : any) => {
      console.log(error);
      this.errorMessage = error.message;
    });
  }

  

}
