import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAhuAXBA2NV0yW8HUnXyVeMHg7iVsXd_w",
  authDomain: "ama-clone-9885.firebaseapp.com",
  projectId: "ama-clone-9885",
  storageBucket: "ama-clone-9885.appspot.com",
  messagingSenderId: "1067270035714",
  appId: "1:1067270035714:web:a39e69d8679f399d350a1b",
  measurementId: "G-066Q2JQTRL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };