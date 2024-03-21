import { Component, OnInit } from '@angular/core';
import { Conversation } from 'src/app/models/conversation';
import { User } from 'src/app/models/user';
import { MessagingService } from 'src/app/services/messages/messaging.service';
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
    private sellerService : SellerService,
    private messagingService : MessagingService
  ) { }

  user : User | null = null;

  correpondent : User[] = [];

  conversations : Conversation[] | null = null;



  ngOnInit(){

    this.userService.getUser().subscribe(user => {
      this.user = user;

      this.messagingService.getConversationsWithToken().subscribe();

      this.messagingService.getConversations().subscribe(conversations => {
        this.conversations = conversations;

        if (!this.conversations) return;
        for (let conversation of this.conversations){
          this.userService.searchUserWithId(conversation.users.find(u => u !== this.user?.uid)!).subscribe(user => {

            this.correpondent.push(user as User);
          });
        }
      });


    });

    // this.sellerService.getSellers().subscribe(sellers => {
    //   this.sellers = sellers;
    // });

    // this.route.queryParams.subscribe(params =>{
    //   console.log(this.user);
    // })
  }


  getCorrespondent(users : string[]){
    let userId = users.find(u => u !== this.user?.uid)!;
    return this.correpondent.find(u => u.uid === userId) as User;
  }

}
