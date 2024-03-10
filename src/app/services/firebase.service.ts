import { Injectable } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
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

  storage = getStorage(this.app);

  // Méthode pour téléverser une image
  async uploadAvatarImage(user: User, file: File): Promise<string> {

    console.log('UPLOAD IMAGE')

    const imageId = Math.random().toString(36).substring(2);

    const storageRef = ref(this.storage, `/users/${user._id}/images/${imageId}`);
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
