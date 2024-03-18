import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, collection, getFirestore, getDoc, setDoc } from 'firebase/firestore';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(
    private firebaseService: FirebaseService,
    private http : HttpClient
  ) { }

  url : string = 'http://localhost:3001/';

  private auth = getAuth(this.firebaseService.app);
  private firestore = getFirestore(this.firebaseService.app);



  sendMessage(message: string, conversationId: string, from: string, to: string) {

    let token = localStorage.getItem('token');
    let headers = { 'Authorization' : 'Bearer ' + token };

    let data = { message, conversationId, from, to };

    return this.http.post(this.url + 'api/messages', data, { headers }).pipe(tap({
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

}
