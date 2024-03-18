import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { SellerService } from 'src/app/services/user/seller.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  constructor(
    
    private userService : UserService,
    private sellerService : SellerService
  ) { }

  user : User | null = null;

  sellers : User[] = [];



  ngOnInit(){

    this.userService.getUser().subscribe(user => {
      this.user = user;
    });

    this.sellerService.getSellers().subscribe(sellers => {
      this.sellers = sellers;
    });

    // this.route.queryParams.subscribe(params =>{
    //   console.log(this.user);
    // })
  }

}
