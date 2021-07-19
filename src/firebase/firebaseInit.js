import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAEpJ-xqvpt9XJN9Y-Ztx6-280qLckV9n8",
  authDomain: "fireblog-2d96d.firebaseapp.com",
  projectId: "fireblog-2d96d",
  storageBucket: "fireblog-2d96d.appspot.com",
  messagingSenderId: "298680123",
  appId: "1:298680123:web:be962079f3984d5503411e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
