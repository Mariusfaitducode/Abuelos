import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  constructor(private router : Router) {}

  user = {admin : true};

  goToOrders(){
    this.router.navigate(['/tabs/profile/orders']);
  }

  goToSettings(){
    this.router.navigate(['/tabs/profile/settings']);
  }

}
