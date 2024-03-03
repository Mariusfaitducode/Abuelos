import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private authService : AuthService) {}

  user : User = new User();


  ngOnInit(){

    this.route.queryParams.subscribe(params =>{

      if (localStorage.getItem('user')){

        this.user = JSON.parse(localStorage.getItem('user')!);
      }
    })
  }

  goToOrders(){
    this.router.navigate(['/tabs/profile/orders']);
  }

  goToSettings(){
    this.router.navigate(['/tabs/profile/settings']);
  }

  disconnect(){
    this.user = new User();
    this.authService.disconnect();
    this.router.navigate(['/log-in']);
  }

}
