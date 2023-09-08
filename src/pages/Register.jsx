import logo from "../assets/logo.png";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {initializeAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

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
const db = getDatabase(app);
const Register = () => {
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle the form submission with the email and password values
    try {
        if(formData.email.includes('@gmail.com') || formData.email.includes('@yahoo.com') || formData.email.includes('@hotmail.com') || formData.email.includes('@icloud.com')){
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      console.log('User Created', user);
      navigate('/');
        }
        else{
            alert("Must Enter valid email");
        }
    //   <link to = "./" />
      // Handle successful login, e.g., redirect to dashboard
    } catch (error) {
      console.error('Registration error:', error);
      // Handle login error, show error message to user
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
