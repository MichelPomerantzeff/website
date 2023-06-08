import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAEj4S__nwkl0u4NyAhbDg3JIq_UtaAp30",
  authDomain: "website-906a4.firebaseapp.com",
  projectId: "website-906a4",
  storageBucket: "website-906a4.appspot.com",
  messagingSenderId: "15222795924",
  appId: "1:15222795924:web:2cc217c63c6c0ae9648e81"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
