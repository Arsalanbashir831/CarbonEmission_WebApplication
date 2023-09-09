import logo from "../assets/logo.png";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJqPPNev6wFtH8SBc52wKsBYAEOLi9Phk",
  authDomain: "carbonemission-90d5e.firebaseapp.com",
  projectId: "carbonemission-90d5e",
  storageBucket: "carbonemission-90d5e.appspot.com",
  messagingSenderId: "338386071282",
  appId: "1:338386071282:web:ff58f050f34be2f308aa6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app);
const db = getFirestore(app);

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', username: '', profession: '', pic: null, password: '' });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file

    if (file) {
      // Store the selected file in the formData state
      setFormData((prevFormData) => ({
        ...prevFormData,
        pic: file,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (
        formData.email.includes('@gmail.com') ||
        formData.email.includes('@yahoo.com') ||
        formData.email.includes('@hotmail.com') ||
        formData.email.includes('@icloud.com')
      ) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        const user = userCredential.user;
        console.log('User Created', user);
        let pictureUrl = ''; // Initialize an empty string for the picture URL

        if (formData.pic) {
          // Check if a picture is selected
          const pictureFile = formData.pic;

          // You can handle picture upload here, e.g., using Firebase Storage
          // For simplicity, we'll just convert the picture to base64
          const reader = new FileReader();

          reader.onload = async (e) => {
            pictureUrl = e.target.result; // Get the base64-encoded image data

            // After handling the image, add user data to Firestore
            const userRef = collection(db, 'User');
            await addDoc(userRef, {
              email: formData.email,
              username: formData.username,
              profession: formData.profession,
              picture: pictureUrl, // Include the base64-encoded image data
            });
            navigate('/');
          };

          reader.readAsDataURL(pictureFile); // Read the file as a data URL
        } else {
          // If no picture is selected, add user data to Firestore without a picture
          const userRef = collection(db, 'User');
          await addDoc(userRef, {
            email: formData.email,
            username: formData.username,
            profession: formData.profession,
          });
          navigate('/');
        }
      } else {
        alert('Must Enter a valid email');
      }
    } catch (error) {
      console.error('Registration error:', error);
      // Handle login error, show error message to the user
    }
  };
  
  console.log('Form Data:', formData);
  // Add your login logic here
  return (

    <div className="container">

      <div className="grid grid-cols-1 md:grid-cols-2 mx-5 md:mx-40 my-10 h-full">
        <div className="bg-main text-white p-10">
          <div className="text-center flex flex-col gap-10 md:gap-20">
            <img className="my-5 w-1/2 mx-auto md:w-auto" src={logo} alt="" />
            <h2 className="text-2xl md:text-3xl">Welcome to the Emission App</h2>
          </div>
        </div>
        <div className="pl-10 my-10 w-full md:w-[40vw]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl md:text-3xl font-bold">Register</h2>
              <h5 className="text-sm md:text-base">Hi Welcome back!</h5>
            </div>
            <div className="grid grid-cols-5 justify-center items-center gap-3">
              <hr className="w-full" />
              <span className="text-sm md:text-base text-gray-600 col-span-3 text-center">Register with Email</span>
              <hr className="w-full" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-4">
                <a href=""></a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-4">
                <label htmlFor="Email">Email</label>
                <TextField
                  fullWidth
                  id="demo-helper-text-aligned"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="Username">Username</label>
                <TextField
                  fullWidth
                  id="demo-helper-text-aligned"
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="Username">Profession</label>
                <TextField
                  fullWidth
                  id="demo-helper-text-aligned"
                  label="Profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col gap-4">
              <input
                type="file"
                accept="image/*"  // Allow only image files
                name="pic"
                onChange={handleFileInputChange}
              />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="password">Password</label>
                <TextField
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  id="demo-helper-text-aligned"
                  label="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="bg-theme text-white w-full p-2 my-2 rounded-md" onClick={handleSubmit}>
                  Submit
                </button>
                <div className="flex flex-col gap-4">
                  <Link to="/">
                    <a className=" text-blue-500" >Already Have Account</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>


  );
};

export default Register;
