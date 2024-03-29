import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, collection, getFirestore, getDoc, setDoc, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { Conversation } from 'src/app/models/conversation';


@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(
    private firebaseService: FirebaseService,
    private http : HttpClient,
  ) { 
    this.conversations = new BehaviorSubject<Conversation[] | null>(null);
  }

  url : string = 'http://localhost:3001/';

  private auth = getAuth(this.firebaseService.app);
  private firestore = getFirestore(this.firebaseService.app);

  private conversations: BehaviorSubject<Conversation[] | null>;

  getConversations() {
    return this.conversations.asObservable();
  }

  getConversationsWithToken(){
      
      let token = localStorage.getItem('token');
      let headers = { 'Authorization' : 'Bearer ' + token };
  
      return this.http.get(this.url + 'api/messages/getAllConversations', { headers }).pipe(tap({
        next: res => { 

          this.conversations.next(res as Conversation[]);
          console.log('Response get conversations:', res); 
        },
        error: err => { 
          console.error('Error:', err); 
        }
      }));
  }


  sendMessage(message: string, conversationId: string, senderId: string, receiverId: string) {

    let token = localStorage.getItem('token');
    let headers = { 'Authorization' : 'Bearer ' + token };

    let data = { message, conversationId, senderId, receiverId };

    return this.http.post(this.url + 'api/messages/sendMessage', data, { headers }).pipe(tap({
      next: res => { 
        console.log('Response:', res); 
        // this.loadProducts().subscribe();
      },
      error: err => { 
        console.error('Error:', err); 
      }
    }));
  }
  

  // listenForMessages(userId: string) {
  //   return this.firestore.collection('messages', ref => 
  //     ref.where('to', '==', userId).orderBy('timestamp')
  //   ).valueChanges({ idField: 'id' });
  // }

  listenForNewMessages(conversationId: string, callback: (messages: any[]) => void): () => void {
    
    const messagesRef = collection(this.firestore, `conversations/${conversationId}/messages`);
    const q = query(messagesRef, orderBy('timestamp', 'asc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      callback(messages);
    });

    // Retournez la fonction de désabonnement pour pouvoir arrêter l'écoute plus tard
    return unsubscribe;
  }


  listenForNewConversations(userId: string) {
    const userRef = doc(this.firestore, `users/${userId}`);

    const unsubscribe = onSnapshot(userRef, (doc) => {
      if (doc.exists()) {
        
        
        
        
        // const userData = doc.data();

        // const conversations = userData.conversations;
        // console.log('Conversations actuelles:', conversations);
        // Ici, vous pouvez traiter les conversations, par exemple, afficher les nouvelles conversations dans l'UI
      } else {
        console.log("Aucun document trouvé !");
      }
    });

    return unsubscribe; // Retournez la fonction pour permettre de se désabonner de l'écouteur plus tard si nécessaire
  }
}
