import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class MessagePage implements OnInit, OnDestroy {

  constructor(
    
    private userService : UserService,
    private sellerService : SellerService,
    private messagingService : MessagingService
  ) { }

  user : User | null = null;

  correpondent : User[] = [];

  conversations : Conversation[] | null = null;

  private unsubscribeFromMessages: () => void = () => {};


  allUsers : User[] = [];

  searchInput : string = '';

  searchList : User[] = [];



  ngOnInit(){

    this.userService.getUser().subscribe(user => {
      this.user = user;

      // this.unsubscribeFromMessages = this.userService.listenToUserUpdate(this.user!.uid);

      this.messagingService.getConversationsWithToken().subscribe();

      this.messagingService.getConversations().subscribe(conversations => {
        this.conversations = conversations;

        console.log('Conversations : ', this.conversations);  

        if (!this.conversations) return;
        for (let conversation of this.conversations){

          if (conversation){
            this.userService.searchUserWithId(conversation.users.find(u => u !== this.user?.uid)!).subscribe(user => {

              this.correpondent.push(user as User);
            });
          }
        }
      });
    });

    this.sellerService.getAllUsers().subscribe(users => {
      this.allUsers = users;
      console.log('All users : ', users);
    });
  }


  ngOnDestroy() {
    // Arrêtez d'écouter les messages lorsque le composant est détruit
    if (this.unsubscribeFromMessages) {
      this.unsubscribeFromMessages();
    }
  }


  getCorrespondent(users : string[]){
    let userId = users.find(u => u !== this.user?.uid)!;
    return this.correpondent.find(u => u.uid === userId) as User;
  }


  searchUser(event : any){

    let searchInput = event.target.value;

    if (searchInput === ''){
      this.searchList = [];
      return;
    }

    this.searchList = [... this.allUsers.filter(user => {
      return user.firstname.toLowerCase().includes(searchInput.toLowerCase()) 
      || user.lastname.toLowerCase().includes(searchInput.toLowerCase()); 
    })];
    
    console.log('Search list : ', this.searchList);
  }

}
