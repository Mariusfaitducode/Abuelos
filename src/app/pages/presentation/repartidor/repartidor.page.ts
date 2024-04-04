import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repartidor',
  templateUrl: './repartidor.page.html',
  styleUrls: ['./repartidor.page.scss', '../presentation.scss'],
})
export class RepartidorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBack(){
    window.history.back();
  }
}
