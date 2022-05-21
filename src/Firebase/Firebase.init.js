import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqHKkm1rrizhQUk50oJ-CidIuKvPJUi0g",
  authDomain: "cisco-chemicals-inc.firebaseapp.com",
  projectId: "cisco-chemicals-inc",
  storageBucket: "cisco-chemicals-inc.appspot.com",
  messagingSenderId: "793148512196",
  appId: "1:793148512196:web:b01b6a663ab46f53e1f691"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth