import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCLqh-DpegtoBhjLDtko5VMyUKNj9b854o",
    authDomain: "board-fa5ef.firebaseapp.com",
    projectId: "board-fa5ef",
    storageBucket: "board-fa5ef.appspot.com",
    messagingSenderId: "698099633782",
    appId: "1:698099633782:web:706b0901b48044f174d957",
    measurementId: "G-35QH2RBZT7"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  export {auth, provider}; 