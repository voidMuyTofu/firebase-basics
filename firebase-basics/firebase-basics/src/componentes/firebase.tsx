import firebase from 'firebase/compat/app';

import "firebase/compat/auth";
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDGcyOpgdlYdqVZewPkdWjZ55-K3obt1wc",
  authDomain: "fir-basics-a2a2a.firebaseapp.com",
  projectId: "fir-basics-a2a2a",
  storageBucket: "fir-basics-a2a2a.appspot.com",
  messagingSenderId: "905141954471",
  appId: "1:905141954471:web:9347a70d872b24a5f77882",
  measurementId: "G-G7CEBR2KBV"
};

firebase.initializeApp(firebaseConfig);

export const Auth = firebase.auth;
export const DB = firebase.firestore();