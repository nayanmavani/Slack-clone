import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDv59I76iPfx8f75iP4Ukvv5AzUmx4D_84",
    authDomain: "slack-clone-ad228.firebaseapp.com",
    projectId: "slack-clone-ad228",
    storageBucket: "slack-clone-ad228.appspot.com",
    messagingSenderId: "783155482001",
    appId: "1:783155482001:web:c2a2a4dc22970016dd1e30",
    measurementId: "G-NZYS54C5ZE"
  };













  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth, provider };
  export default db;