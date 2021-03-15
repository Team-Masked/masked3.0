import firebase from "firebase";
import "firebase/auth";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAZ-7sN_LjSdR9ScQPW4uP1TSu9_Dofz_8",
  authDomain: "masked-f1bf0.firebaseapp.com",
  projectId: "masked-f1bf0",
  storageBucket: "masked-f1bf0.appspot.com",
  messagingSenderId: "1055743265480",
  appId: "1:1055743265480:web:28aae29952648d3b4233fd",
});

var db = firebaseApp.firestore();

export { db };

export const auth = firebaseApp.auth();

export default firebaseApp;
