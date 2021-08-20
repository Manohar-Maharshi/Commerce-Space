import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyA620futLzRoKE2tDq_fYuqvWtoufTsBFU",
    authDomain: "commerce-5bc6d.firebaseapp.com",
    projectId: "commerce-5bc6d",
    storageBucket: "commerce-5bc6d.appspot.com",
    messagingSenderId: "1091844352432",
    appId: "1:1091844352432:web:f1f330d701d4fa0df10e75"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();