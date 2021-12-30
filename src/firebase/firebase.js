import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuwQOX1ybQ3BSk7OAPP_Y21ZEaoQkPcB8",
  authDomain: "qlk-link.firebaseapp.com",
  projectId: "qlk-link",
  storageBucket: "qlk-link.appspot.com",
  messagingSenderId: "234473233997",
  appId: "1:234473233997:web:8886bf02e4dedbcbcf4604",
  measurementId: "G-08HCSKXNH1"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
