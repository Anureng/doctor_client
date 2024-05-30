import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
const LoginData = () => {
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
            placeholder='Enter Email'
            className='md:w-full px-3 py-2 border rounded'
          />
        </div>

        <div className='mb-6'>
          <label className='block text-gray-700 w-fit mb-2' htmlFor='password'>Password</label>
          <input 
            id='password'
            type='password' 
            placeholder='Enter Password'
            className='md:w-full px-3 py-2 border rounded'
          />
        </div>

        <button className='w-full bg-[#007569] text-white py-2 rounded '>
          Login
        </button>
        <p className='mt-2'>OR</p>

        <p className='flex items-center justify-center space-x-10 text-3xl'><FcGoogle/><BiLogoFacebookCircle/></p>
    <div className='mt-2 flex items-center justify-center space-x-2'>
      <p>
      Don't Have an Accout ? 
      </p>
      <p className='text-[#12D6FF]'>Register</p>
    
    </div>
      </div>

      
    </div>
  );
}

export default LoginData;
