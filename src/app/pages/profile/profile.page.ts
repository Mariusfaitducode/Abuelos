import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/user/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private authService : AuthService,
    private userService : UserService) {}

  user : User | null = null;


  ngOnInit(){

    this.userService.getUser().subscribe(user => {
      this.user = user;
    });

    // this.route.queryParams.subscribe(params =>{
    //   console.log(this.user);
    // })
  }

  goToOrders(){
    this.router.navigate(['/profile/orders']);
  }

  goToSettings(){
    this.router.navigate(['/profile/settings']);
  }

  disconnect(){
    this.user = new User();
    this.authService.disconnect();
    this.router.navigate(['/log-in']);
  }

}
