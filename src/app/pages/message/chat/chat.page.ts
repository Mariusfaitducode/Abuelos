import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conversation } from 'src/app/models/conversation';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private router : Router) { }


  conversation : Conversation | null = null;

  ngOnInit() {

    this.route.params.subscribe((params : any) => {

      if (params.idConversation){
        console.log('idConversation');
        console.log(params.idConversation);

        // Search conversation
      }
      else if (params.idUser){
        console.log('idUser');
        console.log(params.idUser);

        this.conversation = new Conversation();
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

}
