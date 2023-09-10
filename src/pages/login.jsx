import logo from "../assets/logo.png";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from "react-router-dom";


import { useFirebase } from "../context/Firebase";


const Login = () => {
  const Firebase = useFirebase()

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error,setError] = useState("")
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
     await Firebase.loginUser(formData.email, formData.password); 
  };
 
  
  
  
  
  
  
 
    console.log('Form Data:', formData);
   
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
              <h2 className="text-2xl md:text-3xl font-bold">Login</h2>
              <h5 className="text-sm md:text-base">Hi Welcome back!</h5>
            </div>
            <div className="grid grid-cols-5 justify-center items-center gap-3">
              <hr className="w-full" />
              <span className="text-sm md:text-base text-gray-600 col-span-3 text-center">or login with Email</span>
              <hr className="w-full" />
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
                <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-4">
              <Link to="/Register">
            <a className=" text-blue-500" >Create Account</a>
          </Link>
              </div>
              </div>
                <p className="text-red-600" >{error}</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    
  );
};

export default Login;
