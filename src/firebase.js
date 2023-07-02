
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBvwjJhKWYj3yrQTfj8j59EnesqPgSMDO4",
    authDomain: "taskmanager-c5339.firebaseapp.com",
    projectId: "taskmanager-c5339",
    storageBucket: "taskmanager-c5339.appspot.com",
    messagingSenderId: "209783373577",
    appId: "1:209783373577:web:ec3f00134576ccddb4ddd8",
    measurementId: "G-0LVPTTNKCG"
  };


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}