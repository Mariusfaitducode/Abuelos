import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {


    document.addEventListener('input', (event : any) => {
      if (event.target.id === 'myTextarea') {
        const textarea = event.target;
        textarea.style.height = 'auto'; // Réinitialise la hauteur pour permettre la réduction
        textarea.style.height = textarea.scrollHeight + 'px'; // Ajuste la hauteur en fonction du contenu
      }
    });
  }

  goBackButton(){
    this.route.navigate(['tabs/message']);
  }

}
