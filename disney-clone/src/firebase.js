import firebase, { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAy6uP-xdV2QladPFsfILPbenhBzWrzoPI",
  authDomain: "disney-clone-7e767.firebaseapp.com",
  projectId: "disney-clone-7e767",
  storageBucket: "disney-clone-7e767.appspot.com",
  messagingSenderId: "14574856591",
  appId: "1:14574856591:web:ae3b88d407631446d383fa",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
