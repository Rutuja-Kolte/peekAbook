import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyATZ0TDUkl9_MYPGpCv-kmH6Bnb0_PZ9fw",
    authDomain: "peekabooktesting.firebaseapp.com",
    projectId: "peekabooktesting",
    storageBucket: "peekabooktesting.appspot.com",
    messagingSenderId: "466290752441",
    appId: "1:466290752441:web:3c4132a869cf1561a35468",
    measurementId: "G-MF5L7FV9PL"  // Your firebase credentials
});

var db = firebaseApp.firestore();

export { db };
