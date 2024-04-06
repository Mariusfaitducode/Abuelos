import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-becoming-repartidor',
  templateUrl: './becoming-repartidor.page.html',
  styleUrls: ['./becoming-repartidor.page.scss', '../../presentation/presentation.scss' ],
})
export class BecomingRepartidorPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['./tabs/home']);
  }
}
