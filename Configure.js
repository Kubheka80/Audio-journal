import firebase from "firebase/compat/app";
// Other libraries might need to also be prefixed with "compat":
import "firebase/compat/auth";
import "firebase/compat/firestore";
export const firebaseConfig = {
    apiKey: "AIzaSyAdgkG1jU7puNhDuaDr00EzoboDuIBDGrI",
    authDomain: "audio-journal-814a2.firebaseapp.com",
    projectId: "audio-journal-814a2",
    storageBucket: "audio-journal-814a2.appspot.com",
    messagingSenderId: "782655041271",
    appId: "1:782655041271:web:350b2d7786acff262f6df2"
  };
// Then you can then use the old interface, with version 9:
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }