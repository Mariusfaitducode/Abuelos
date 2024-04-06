import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { User } from 'src/app/models/user';
import { Product } from 'src/app/models/product';
import { Field } from 'src/app/models/field';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private firebaseService: FirebaseService
    ) 
    {}

    private storage = getStorage(this.firebaseService.app);


    // STORAGE


    // Méthode pour téléverser une image
    async uploadAvatarImage(user: User, file: File): Promise<string> {

      console.log('UPLOAD IMAGE')

      const imageId = Date.now().toString();

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


    async uploadProductImage(product: Product, file: File): Promise<string> {

      console.log('UPLOAD IMAGE')

      const imageId = Date.now().toString();

      const storageRef = ref(this.storage, `/products/${product.uid}/images/${imageId}`);
      try {
        const snapshot = await uploadBytes(storageRef, file);
        return getDownloadURL(snapshot.ref);
      } 
      catch (error) {
        console.error("Erreur de téléversement : ", error);
        throw error;
      }
    }


    async uploadFieldImage(field: Field, file: File): Promise<string> {

      console.log('UPLOAD IMAGE')

      const imageId = Date.now().toString();

      const storageRef = ref(this.storage, `/fields/${field.uid}/images/${imageId}`);
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
