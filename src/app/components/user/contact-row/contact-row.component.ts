import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conversation } from 'src/app/models/conversation';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-contact-row',
  templateUrl: './contact-row.component.html',
  styleUrls: ['./contact-row.component.scss'],
})
export class ContactRowComponent  implements OnInit {

  constructor(private router : Router) { }

  @Input() user : User = new User();

  @Input() conv : Conversation | null = null;

  ngOnInit() {}

  goToChat(){

    console.log('go to chat');

    console.log(this.user);

    if (this.conv){
      this.router.navigate(['chat/' + this.conv.uid + '/' + this.user!.uid]);
      return;
    }
    else{
      this.router.navigate(['chat/' + this.user!.uid]);
    }
  }

}
