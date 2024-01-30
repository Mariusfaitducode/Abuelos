import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private userService : UserService) { }

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
    console.log(this.newUser);

    this.userService.postUser(this.newUser).subscribe((res : any) => {
      console.log(res);
    });
  }

}
