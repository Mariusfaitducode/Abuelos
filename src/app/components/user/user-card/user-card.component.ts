import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent  implements OnInit {

  constructor(
    private router : Router, 
    ) { }


  @Input() user : User = new User();
  @Input() isCurrentUser : boolean = false;

  ngOnInit() {}


  cardNavigation(){
    if (this.isCurrentUser){
      this.router.navigate(['profile/edit-profile']);
      
    }else{
      this.router.navigate(['chat/' + this.user!.uid]);
      
    }
  

  }

}
