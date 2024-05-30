import React from 'react';

const SignUpData = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-20 p-4 min-h-screen '>

      <img src="./login.png" alt='Loading...' className='' />
      
      <div className='bg-white shadow-lg shadow-blue-500/50 rounded p-6 w-full max-w-md'>

        <p className='text-center text-xl font-semibold mb-6'>Welcome</p>

        <div className='mb-4'>
          <label className='block text-gray-700 w-fit mb-2' htmlFor='first-name'>First Name</label>
          <input 
            id='first-name'
            type='text' 
            placeholder='Enter Your First Name'
            className='w-full px-3 py-2 border rounded'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 w-fit mb-2' htmlFor='last-name'>Last Name</label>
          <input 
            id='last-name'
            type='text' 
            placeholder='Enter Last Name'
            className='w-full px-3 py-2 border rounded'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 w-fit mb-2' htmlFor='email'>Email</label>
          <input 
            id='email'
            type='email' 
            placeholder='Enter Email'
            className='w-full px-3 py-2 border rounded'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 w-fit mb-2' htmlFor='password'>Password</label>
          <input 
            id='password'
            type='password' 
            placeholder='Enter Password'
            className='w-full px-3 py-2 border rounded'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 w-fit mb-2' htmlFor='retype-password'>ReType Password</label>
          <input 
            id='retype-password'
            type='password' 
            placeholder='ReType Password'
            className='w-full px-3 py-2 border rounded'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 w-fit mb-2' htmlFor='location'>Location</label>
          <input 
            id='location'
            type='text' 
            placeholder='Enter Location'
            className='w-full px-3 py-2 border rounded'
          />
        </div>

        <div className='mb-6 flex items-center'>
          <p className='mr-4'>Start as:</p>
          <div className='flex space-x-6'>
            <div className='flex items-center'>
              <input type="radio" id="patient" name="role" value="patient" className='mr-2' />
              <label htmlFor="patient">Patient</label>
            </div>
            <div className='flex items-center'>
              <input type="radio" id="doctor" name="role" value="doctor" className='mr-2' />
              <label htmlFor="doctor">Doctor</label>
            </div>
          </div>
        </div>

        <button className='w-full bg-[#007569] text-white py-2 rounded '>
          Signup
        </button>

        <div className='mt-2 flex items-center justify-center space-x-2'>
          <p>Already have an account?</p>
          <p className='text-[#12D6FF] cursor-pointer'>Login Now</p>
        </div>
      </div>
    </div>
  );
}

export default SignUpData;
