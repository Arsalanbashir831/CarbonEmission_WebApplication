import { createContext, useContext } from "react"; // Added useContext
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"; // Corrected import for createUserWithEmailAndPassword
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { useNavigate  } from 'react-router-dom';
const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyBJqPPNev6wFtH8SBc52wKsBYAEOLi9Phk",
    authDomain: "carbonemission-90d5e.firebaseapp.com",
    projectId: "carbonemission-90d5e",
    storageBucket: "carbonemission-90d5e.appspot.com",
    messagingSenderId: "338386071282",
    appId: "1:338386071282:web:ff58f050f34be2f308aa6b"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); // Changed to getAuth
const db = getFirestore(firebaseApp);

export const useFirebase = () => {
    return useContext(FirebaseContext); // Added return statement
}

export const FirebaseProvider = (props) => {
    const navigateTo = useNavigate();
    const signupUserEmailandPass = async (email, pass) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, pass); // Added await and error handling
            const user = userCredential.user;
            console.log("User signed up:", user);
        } catch (error) {
            console.error("Error signing up:", error.message);
        }
    }
    const loginUser = async (email, pass) => {
       
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, pass);
          const user = userCredential.user;
          localStorage.setItem("email", email);
          navigateTo('/dashboard'); // Use navigate instead of navigateTo
          console.log("User Logged In:", user);
        } catch (error) {
          console.error("Error Logging In:", error.message); // Corrected error message
        }
      }
      
    const storeUserDataInFirebase = async (email, username, profession, pic ) => {
        try {
          const userRef = collection(db, 'User');
          let pictureUrl = '';
          const pictureFile = pic;
          const reader = new FileReader();
    
          reader.onload = async (e) => {
            pictureUrl = e.target.result;
    
            const data = await addDoc(userRef, {
              email: email,
              username: username,
              profession: profession,
              picture: pictureUrl,
        
            });
    
            console.log("User data stored in Firebase:", data);
          }
    
          reader.readAsDataURL(pictureFile);
        } catch (error) {
          console.error("Error storing user data:", error.message);
        }
      }
    return (
        <FirebaseContext.Provider value={{ signupUserEmailandPass,storeUserDataInFirebase,loginUser }}>
            {props.children}
        </FirebaseContext.Provider>
    );
}
