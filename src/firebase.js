import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBwc-WNAG2-L6WhMEiYWzuXQ9DgBH2SB08",
  authDomain: "copybook-df803.firebaseapp.com",
  projectId: "copybook-df803",
  storageBucket: "copybook-df803.appspot.com",
  messagingSenderId: "262684846560",
  appId: "1:262684846560:web:a104fba5c516022a5a6385",
  measurementId: "G-X0TZFEVZZS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

