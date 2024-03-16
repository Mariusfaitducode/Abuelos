import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
})
export class DashboardCardComponent  implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}

  goToDashboard(){
    this.router.navigate(['profile/dashboard']);

  }

}
