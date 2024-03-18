import { Injectable } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { doc, collection, getFirestore, getDoc, setDoc } from 'firebase/firestore';

import { User } from '../models/user';
import { Product } from '../models/product';


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
}
