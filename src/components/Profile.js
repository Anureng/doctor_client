import React, { useState } from 'react';
import Appointment from './Appointment';
import SaveDoctor from './SaveDoctor';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Alan',
    age: '35 years old',
    gender: 'male',
    dob: '24 / 02 / 1989',
    number: '0123456789',
    address: 'Sydney Australia',
    blood_group: 'B+'
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editProfile, setEditProfile] = useState(profile);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSave = () => {
    setProfile(editProfile);
    setIsDialogOpen(false);
  };

  return (
    <div className='flex flex-col lg:flex-row justify-around p-3 lg:p-0 mb-3 space-y-3 lg:space-y-0'>
      <div className='border border-black lg:w-96 p-4 space-y-4 h-fit'>
        <div className='flex flex-col items-center justify-center space-y-2'>
          <img src='/login.png' alt='Loading...' className='w-80 h-80 rounded-full border' />
          <p>{profile.name}</p>
          <p>{profile.age}</p>
        </div>
        <div>
          <div className='flex items-center space-x-3 text-lg'>
            <p className='font-semibold'>Gender</p>
            <p className='font-light'>{profile.gender}</p>
          </div>
          <div className='flex items-center space-x-3 text-lg'>
            <p className='font-semibold'>DOB</p>
            <p className='font-light'>{profile.dob}</p>
          </div>
          <div className='flex items-center space-x-3 text-lg'>
            <p className='font-semibold'>Phone No</p>
            <p className='font-light'>{profile.number}</p>
          </div>
          <div className='flex items-center space-x-3 text-lg'>
            <p className='font-semibold'>Address</p>
            <p className='font-light'>{profile.address}</p>
          </div>
          <div className='flex items-center space-x-3 text-lg'>
            <p className='font-semibold'>Blood Group</p>
            <p className='font-light'>{profile.blood_group}</p>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <button
            className='bg-[#276A7B] text-white px-2 py-1 rounded-lg'
            onClick={() => setIsDialogOpen(true)}
          >
            Update Setting
          </button>
        </div>
      </div>

      {isDialogOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75'>
          <div className='bg-white p-4 rounded-lg space-y-4 w-96'>
            <h2 className='text-xl font-bold'>Edit Profile</h2>
            <div>
              <label className='block font-semibold'>Name</label>
              <input
                type='text'
                name='name'
                value={editProfile.name}
                onChange={handleInputChange}
                className='border p-1 rounded w-full'
              />
            </div>
            <div>
              <label className='block font-semibold'>Age</label>
              <input
                type='text'
                name='age'
                value={editProfile.age}
                onChange={handleInputChange}
                className='border p-1 rounded w-full'
              />
            </div>
            <div>
              <label className='block font-semibold'>Gender</label>
              <input
                type='text'
                name='gender'
                value={editProfile.gender}
                onChange={handleInputChange}
                className='border p-1 rounded w-full'
              />
            </div>
            <div>
              <label className='block font-semibold'>DOB</label>
              <input
                type='text'
                name='dob'
                value={editProfile.dob}
                onChange={handleInputChange}
                className='border p-1 rounded w-full'
              />
            </div>
            <div>
              <label className='block font-semibold'>Phone No</label>
              <input
                type='text'
                name='number'
                value={editProfile.number}
                onChange={handleInputChange}
                className='border p-1 rounded w-full'
              />
            </div>
            <div>
              <label className='block font-semibold'>Address</label>
              <input
                type='text'
                name='address'
                value={editProfile.address}
                onChange={handleInputChange}
                className='border p-1 rounded w-full'
              />
            </div>
            <div>
              <label className='block font-semibold'>Blood Group</label>
              <input
                type='text'
                name='blood_group'
                value={editProfile.blood_group}
                onChange={handleInputChange}
                className='border p-1 rounded w-full'
              />
            </div>
            <div className='flex space-x-4'>
              <button
                className='bg-green-500 text-white px-2 py-1 rounded'
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className='bg-red-500 text-white px-2 py-1 rounded'
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

<div className='md:w-3/5 space-y-3'>
      <Appointment/>
      <SaveDoctor/>
</div>
    </div>
  );
};

export default Profile;
