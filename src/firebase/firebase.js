
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/auth'
import 'firebase/firestore'
import 'firebase/storage' 





const firebaseConfig = {
  apiKey: "AIzaSyDvMPNbFcf2QqlJVGayupdw9DdigtDvXGw",
  authDomain: "softwareapp-62061.firebaseapp.com",
  projectId: "softwareapp-62061",
  storageBucket: "softwareapp-62061.appspot.com",
  messagingSenderId: "555081164372",
  appId: "1:555081164372:web:06ceb2888a910a18ccefc1",
  measurementId: "G-QFYXEL81CB"
};


firebase.initializeApp(firebaseConfig);


export default firebase;


