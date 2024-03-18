import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { User } from 'src/app/models/user';

import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, collection, getFirestore, getDoc, setDoc } from 'firebase/firestore';


import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(
    private firebaseService: FirebaseService,
    private http : HttpClient
    ) 
    {}


  private auth = getAuth(this.firebaseService.app);
  private firestore = getFirestore(this.firebaseService.app);

  url : string = 'http://localhost:3001/';


  

  // AUTHENTIFICATION

  async signUpWithEmail(userData : User, password : string): Promise<string> {

    const email = userData.email;

    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);

      // Création du document utilisateur si celui-ci n'existe pas
      await this.createUserDocument(userCredential.user, userData);

      const token = await userCredential.user.getIdToken();
      return token;
    } catch (error) {
      console.error('Erreur lors de la création du compte:', error);
      throw error;
    }
  }


  // Connexion avec e-mail et mot de passe
  async loginWithEmail(userData : User, password : string): Promise<string> {

    const email = userData.email;

    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);

      console.log('RESULT SIMPLE LOGIN USER:', userCredential.user)

      const token = await userCredential.user.getIdToken();

      localStorage.setItem('token', token);

      return token;
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      throw error;
    }
  }


  // Connexion avec Google
  async loginWithGoogle(): Promise<string> {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);

      console.log('RESULT GOOGLE USER:', result.user)

      // Création du document utilisateur si celui-ci n'existe pas
      await this.createUserDocument(result.user, new User());

      const token = await result.user.getIdToken();

      localStorage.setItem('token', token);

      return token;
    } catch (error) {
      console.error('Erreur lors de la connexion avec Google:', error);
      throw error;
    }
  }


   // FIRESTORE

   async createUserDocument(user : any, userData: User) {

    const userRef = doc(this.firestore, `users/${user.uid}`);
    const snapshot = await getDoc(userRef);
  
    if (!snapshot.exists()) {

      userData.uid = user.uid;
      userData.email = user.email;

      const newUser = JSON.parse(JSON.stringify(userData));
      try {
        await setDoc(userRef, newUser);
      } catch (error) {
        console.error("Erreur lors de la création du document utilisateur:", error);
        throw error;
      }
    }
  }


  disconnect(){
    localStorage.removeItem('token');
    // this.router.navigate(['/log-in']);
  }

}
