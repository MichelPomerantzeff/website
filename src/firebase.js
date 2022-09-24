import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD_btGH4F7oltA20aVME0mQg7CK5zT9Qss",
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