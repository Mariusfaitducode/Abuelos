import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.page.html',
  styleUrls: ['./operation.page.scss', '../presentation.scss'],
})
export class OperationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBack(){
    window.history.back();
  }

}
