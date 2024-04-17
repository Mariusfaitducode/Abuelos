import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conversation } from 'src/app/models/conversation';
import { User } from 'src/app/models/user';
import { MessagingService } from 'src/app/services/messages/messaging.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private userService : UserService,
    private messagingService : MessagingService) { }


  conversations : Conversation[] | null = null;
  

  conversation : Conversation | null = null;

  user : User | null = null;

  correspondent : User | null = null;

  messageTyped : string = '';

  existingConversation : boolean = false;

  ngOnInit() {

    this.userService.getUser().subscribe(user => {
      this.user = user;

      this.messagingService.getConversationsWithToken().subscribe();

      this.messagingService.getConversations().subscribe(conversations => {
        this.conversations = conversations;

        if (!this.conversations) return;
      });
    });

    this.route.params.subscribe((params : any) => {

      if (params.idConversation){
        console.log('idConversation');
        console.log(params.idConversation);

        this.messagingService.getConversations().subscribe(conversations => {

          console.log('Conversations found : ', conversations);

          this.conversation = conversations?.find(c => c?.uid === params.idConversation)!;

          console.log('Conversation found : ', this.conversation);

          if (this.conversation){
            this.existingConversation = true;
          }

          this.userService.searchUserWithId(params.idUser).subscribe((user : any) => {

            if (!this.conversation?.users.includes(user.uid)){
              this.conversation?.users.push(user.uid);
            }
  
            this.correspondent = user;
          });
        });
      }
      else if (params.idUser){
        console.log('idUser');
        console.log(params.idUser);

        this.conversation = new Conversation();


        if (this.conversations){
          let conv = this.conversations.find(c => c?.users.includes(params.idUser));

          if (conv){
            this.conversation = conv;
          }
        }


        // Search user

        this.userService.searchUserWithId(params.idUser).subscribe((user : any) => {

          if (!this.conversation?.users.includes(user.uid)){
            this.conversation?.users.push(user.uid);
          }

          this.correspondent = user;
        });

      }
      else{
        console.log('No id');
      }


    });






    // Ajuste la hauteur du textarea en fonction du contenu

    document.addEventListener('input', (event : any) => {
      if (event.target.id === 'myTextarea') {
        const textarea = event.target;
        textarea.style.height = 'auto'; // Réinitialise la hauteur pour permettre la réduction
        textarea.style.height = textarea.scrollHeight + 'px'; // Ajuste la hauteur en fonction du contenu
      }
    });
  }

  goBackButton(){
    this.router.navigate(['tabs/message']);
  }


  sendMessage(){
      
      console.log('Send message');
  
      // Envoi du message

      console.log(this.messageTyped)

      this.messagingService.sendMessage(this.messageTyped, this.conversation!.uid, this.user!.uid, this.correspondent!.uid).subscribe((conversation : any) => {
        console.log('Conversation updated : ', conversation);

        this.conversation = conversation;
      });
  }

}
