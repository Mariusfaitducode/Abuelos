import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ImageService } from 'src/app/services/images/image.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  constructor(
    private route : Router,
    private userService : UserService,
    private firebaseService : FirebaseService,
    private imageService : ImageService,
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


  goBackButton(){
    this.route.navigate(['tabs/profile']);
  }

  fileUpload(event : any){

    this.file = event.target.files[0];
  }


  canModifyUser(){
    return this.user != null && this.lastUser != null && JSON.stringify(this.user) != JSON.stringify(this.lastUser) || this.file != null;
  }

  modifyUser(){
    if(this.user != null){

      if (this.file != null){

        this.imageService.uploadAvatarImage(this.user, this.file).then(url => {
          this.user!.avatar = url;
          this.userService.updateUser(this.user!).subscribe(res => {
            // console.log(res);
            this.route.navigate(['tabs/profile']);
          });
        });

        // this.userService.updateUser(this.user, this.file).then(res => {
        //   // console.log(res);
        //   this.router.navigate(['tabs/profile']);
          
        // });
      }
      else {
        this.userService.updateUser(this.user).subscribe(res => {
          // console.log(res);
          this.route.navigate(['tabs/profile']);
        });
      }
      
    }
  }

}
