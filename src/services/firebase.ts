import firebase from 'firebase/app'

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCHftNEPCLjUvSIYcLkaY-VQK2jEnjjA0g",
    authDomain: "nlw-letmeask-89d4c.firebaseapp.com",
    databaseURL: "https://nlw-letmeask-89d4c-default-rtdb.firebaseio.com",
    projectId: "nlw-letmeask-89d4c",
    storageBucket: "nlw-letmeask-89d4c.appspot.com",
    messagingSenderId: "68573797386",
    appId: "1:68573797386:web:c3be0b7f59705cb513d3f3"
  };

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database } 