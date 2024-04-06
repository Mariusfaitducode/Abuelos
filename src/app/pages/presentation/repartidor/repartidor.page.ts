import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repartidor',
  templateUrl: './repartidor.page.html',
  styleUrls: ['./repartidor.page.scss', '../presentation.scss'],
})
export class RepartidorPage implements OnInit {

  constructor(
    private router : Router,
  ) { }

  ngOnInit() {
  }

  goBack(){
    window.history.back();
  }

  goToRepartidorForm(){
    this.router.navigate(['/becoming-repartidor']);
  }
}
