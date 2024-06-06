import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { useAuth } from '../AuthContext';
import { Link, useNavigate } from 'react-router-dom';
const LoginData = () => {
  const {login, setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://doctors-backend-ztcl.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const { username, email } = data;
        setUser({ username, email });
        login();
        localStorage.setItem("token", data.sessionToken);
        localStorage.setItem("userId", data._id);
        alert("Logged in successfully");
        navigate("/");
      } else {
        alert("something went wrong...please check credential");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:space-x-20  p-4'>

        <img src="./login.png" alt='Loading...' className=' ' />
      <div className='bg-white shadow-lg shadow-blue-500/50 rounded p-6  md:w-2/5'>

        <p className='text-center text-xl font-semibold mb-6'>Welcome</p>

        <div className='mb-4'>
          <label className='block text-gray-700 w-fit mb-2' htmlFor='email'>Email</label>
          <input 
            id='email'
            type='email' 
            value={email}
            name='email'
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Enter Email'
            className='md:w-full px-3 py-2 border rounded'
          />
        </div>

        <div className='mb-6'>
          <label className='block text-gray-700 w-fit mb-2' htmlFor='password'>Password</label>
          <input 
            id='password'
            type='password' 
            name='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Enter Password'
            className='md:w-full px-3 py-2 border rounded'
          />
        </div>

        <button onClick={handleLogin} className='w-full bg-[#007569] text-white py-2 rounded '>
          Login
        </button>
        {/* <p className='mt-2 flex items-center justify-center'>OR</p>

        <p className='flex items-center justify-center space-x-10 text-3xl'><FcGoogle/><BiLogoFacebookCircle/></p> */}
    <div className='mt-2 flex items-center justify-center space-x-2'>
      <p>
      Don't Have an Accout ? 
      </p>
      <p className='text-[#12D6FF]'>
        <Link to="/signup">
        Register
        </Link>
        </p>
    
    </div>
      </div>

      
    </div>
  );
}

export default LoginData;
