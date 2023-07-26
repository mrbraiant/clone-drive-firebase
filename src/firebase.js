// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmSTlFfh3w2a0axJ1-aWyRSeIhbQk7EsU",
  authDomain: "clone-drive-85011.firebaseapp.com",
  projectId: "clone-drive-85011",
  storageBucket: "clone-drive-85011.appspot.com",
  messagingSenderId: "109180603047",
  appId: "1:109180603047:web:418a35cc6147af7678a982"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;