import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.page.html',
  styleUrls: ['./concept.page.scss'],
})
export class ConceptPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  goBack(){
    window.history.back();
  }
}
