import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-row',
  templateUrl: './contact-row.component.html',
  styleUrls: ['./contact-row.component.scss'],
})
export class ContactRowComponent  implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}

  goToChat(){
    this.router.navigate(['message/chat']);
  }

}
