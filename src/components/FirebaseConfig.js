import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBQ66N51793sqKfoqut5mv5ZrcgBJdTHWg",
  authDomain: "anirex-b9851.firebaseapp.com",
  projectId: "anirex-b9851",
  storageBucket: "anirex-b9851.appspot.com",
  messagingSenderId: "1055747240484",
  appId: "1:1055747240484:web:97014b84add0dfa0e4deb1"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app)
const auth = getAuth(app);

export { auth };