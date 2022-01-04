import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDpnsFUKwJDLIabcUEs87zztV3Srnz8PqI",
    authDomain: "tailwindproject-e56f7.firebaseapp.com",
    databaseURL: "https://tailwindproject-e56f7-default-rtdb.firebaseio.com",
    projectId: "tailwindproject-e56f7",
    storageBucket: "tailwindproject-e56f7.appspot.com",
    messagingSenderId: "1087269620134",
    appId: "1:1087269620134:web:ce663fb613847a2276e767"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

        
export { auth, db };