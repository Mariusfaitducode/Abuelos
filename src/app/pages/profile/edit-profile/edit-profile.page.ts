import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  constructor(
    private router : Router,
    private userService : UserService
  ) { }

  user : User | null = null;

  lastUser : User | null = null;

  file: File | null = null;

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.user = user;
      this.lastUser = JSON.parse(JSON.stringify(user));
    });
  }


  fileUpload(event : any){

    this.file = event.target.files[0];

    // console.log(event);

    // let file = event.target.files[0];

    // console.log(file);

    // const base64 = this.convertFileToBase64(file);

    // console.log(base64);

    // console.log(this.user);

    // this.user.avatar = base64;
  }

  // convertFileToBase64(file : File){
  //   const reader = new FileReader();

  //   reader.readAsDataURL(file);

  //   reader.onload = () => {
  //     console.log(reader.result);
  //     this.user!.avatar = reader.result as string;
  //   }

  //   reader.onerror = () => {
  //     console.log('Error');
  //   }
  // }


  canModifyUser(){
    return this.user != null && this.lastUser != null && JSON.stringify(this.user) != JSON.stringify(this.lastUser) || this.file != null;
  }

  modifyUser(){
    if(this.user != null){

      if (this.file != null){
        this.userService.updateUser(this.user, this.file).then(res => {
          // console.log(res);
          this.router.navigate(['tabs/profile']);
          
        });
      }
      else {
        this.userService.updateUserWithoutFile(this.user).subscribe(res => {
          // console.log(res);
          this.router.navigate(['tabs/profile']);
        });
      }
      
    }
  }

}
