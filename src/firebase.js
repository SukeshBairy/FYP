import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDG9fdV-FANzLVUQq0lbMzZJ3vLhVIokxk",
  authDomain: "fyp-lending-loan-analysis.firebaseapp.com",
  projectId: "fyp-lending-loan-analysis",
  storageBucket: "fyp-lending-loan-analysis.appspot.com",
  messagingSenderId: "658196175338",
  appId: "1:658196175338:web:66840633d9405e83773a93",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
