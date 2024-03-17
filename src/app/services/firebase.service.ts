import { Injectable } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { doc, collection, getFirestore, getDoc, setDoc } from 'firebase/firestore';

import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  app = initializeApp({
    apiKey: "AIzaSyAEiN85ANKg-uqHWZghmRyl72ir0SvlGqo",
    authDomain: "abuelos-30e59.firebaseapp.com",
    projectId: "abuelos-30e59",
    storageBucket: "abuelos-30e59.appspot.com",
    messagingSenderId: "741723104718",
    appId: "1:741723104718:web:27511175d344e272eb779f"
  });


  auth = getAuth(this.app);

  firestore = getFirestore(this.app);


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


  // STORAGE


  storage = getStorage(this.app);

  // Méthode pour téléverser une image
  async uploadAvatarImage(user: User, file: File): Promise<string> {

    console.log('UPLOAD IMAGE')

    const imageId = Math.random().toString(36).substring(2);

    const storageRef = ref(this.storage, `/users/${user.uid}/images/${imageId}`);
    try {
      const snapshot = await uploadBytes(storageRef, file);
      return getDownloadURL(snapshot.ref);
    } 
    catch (error) {
      console.error("Erreur de téléversement : ", error);
      throw error;
    }
  }

  // Méthode pour récupérer l'URL d'une image téléversée
  async getImageUrl(fileName: string): Promise<string> {
    const storageRef = ref(this.storage, `images/${fileName}`);
    try {
      return await getDownloadURL(storageRef);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'URL : ", error);
      throw error;
    }
  }
  
}
