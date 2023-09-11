
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
var firebaseConfig = {
    apiKey: "AIzaSyBJqPPNev6wFtH8SBc52wKsBYAEOLi9Phk",
    authDomain: "carbonemission-90d5e.firebaseapp.com",
    projectId: "carbonemission-90d5e",
    storageBucket: "carbonemission-90d5e.appspot.com",
    messagingSenderId: "338386071282",
    appId: "1:338386071282:web:ff58f050f34be2f308aa6b"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

 
export default db;