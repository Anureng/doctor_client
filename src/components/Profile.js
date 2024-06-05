import React, { useState,useEffect } from 'react';
import Appointment from './Appointment';
import SaveDoctor from './SaveDoctor';

const Profile = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [Phoneno, setPhoneno] = useState(0);
  const [address, setaddress] = useState("");
  const [dob, setdob] = useState("");
  const [Bio, setBio] = useState("");
  const [gender, setgender] = useState("");
  const [bloodgroup, setbloodgroup] = useState("");
  const [profiledata,setprofiledata] = useState([]);
 
  
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
        const id = localStorage.getItem("userId");
        const response = await fetch(`https://doctors-backend-ztcl.onrender.com/updatesettings/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({firstname,lastname,Phoneno,address,dob,Bio,gender,bloodgroup}),
        });
  
        if (response.ok) {
          alert("Updated");
          setIsDialogOpen(false)
        }else {
          alert("something went wrong...please check credential");
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
 }

 const fetchData = async () => {
  try {
    const sessionToken=localStorage.getItem("token");
const response = await fetch(
  "https://doctors-backend-ztcl.onrender.com/users",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({sessionToken}),
  }
);
if (response.ok) {
  const data = await response.json();
  setprofiledata(data)
} else {
  alert("Something went wrong");
}
} catch (error) {
console.error("Error during login:", error);
}
}

useEffect(() => {
  fetchData();
}, []);

  return (
    <div className='flex flex-col lg:flex-row justify-around p-3 lg:p-0 mb-3 space-y-3 lg:space-y-0'>
      {
          profiledata.filter((e) => (e._id === localStorage.getItem("userId"))).map(profiledata =>(
      <div className='border border-black lg:w-96 p-4 space-y-4 h-fit'>
        <div className='flex flex-col items-center justify-center space-y-2'>
          <img src='/login.png' alt='Loading...' className='w-80 h-80 rounded-full border' />
          <p>{profiledata.firstname} {profiledata.lastname}</p>
          <p>{profiledata.Bio}</p>
        </div>
        <div>
          <div className='flex items-center space-x-3 text-lg'>
            <p className='font-semibold'>Gender</p>
            <p className='font-light'>{profiledata.gender}</p>
          </div>
          <div className='flex items-center space-x-3 text-lg'>
            <p className='font-semibold'>DOB</p>
            <p className='font-light'>{profiledata.dob}</p>
          </div>
          <div className='flex items-center space-x-3 text-lg'>
            <p className='font-semibold'>Phone No</p>
            <p className='font-light'>{profiledata.Phoneno}</p>
          </div>
          <div className='flex items-center space-x-3 text-lg'>
            <p className='font-semibold'>Address</p>
            <p className='font-light'>{profiledata.address}</p>
          </div>
          <div className='flex items-center space-x-3 text-lg'>
            <p className='font-semibold'>Blood Group</p>
            <p className='font-light'>{profiledata.bloodgroup}</p>
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
          ))}
      {isDialogOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75'>
          <div className='bg-white p-4 rounded-lg space-y-4 w-96'>
            <h2 className='text-xl font-bold'>Edit Profile</h2>
            <div>
              <label className='block font-semibold'>First Name</label>
              <input
                type='text'
                name='name'
                value={firstname}
                onChange={(e)=>setfirstname(e.target.value)}
                className='border p-1 rounded w-full'
              />
            </div>
            <div>
              <label className='block font-semibold'>Last Name</label>
              <input
                type='text'
                name='name'
                value={lastname}
                onChange={(e)=>setlastname(e.target.value)}
                className='border p-1 rounded w-full'
              />
            </div>
            <div>
              <label className='block font-semibold'>Age</label>
              <input
                type='text'
                name='age'
                value={Bio}
                onChange={(e)=>setBio(e.target.value)}
                className='border p-1 rounded w-full'
              />
            </div>
            <div>
              <label className='block font-semibold'>Gender</label>
              <input
                type='text'
                name='gender'
                value={gender}
                onChange={(e)=>setgender(e.target.value)}
                className='border p-1 rounded w-full'
              />
            </div>
            <div>
              <label className='block font-semibold'>DOB</label>
              <input
                type='text'
                name='dob'
                value={dob}
                onChange={(e)=>setdob(e.target.value)}
                className='border p-1 rounded w-full'
              />
            </div>
            <div>
              <label className='block font-semibold'>Phone No</label>
              <input
                type='Number'
                name='number'
                value={Phoneno}
                onChange={(e)=>setPhoneno(e.target.value)}
                className='border p-1 rounded w-full'
              />
            </div>
            <div>
              <label className='block font-semibold'>Address</label>
              <input
                type='text'
                name='address'
                value={address}
                onChange={(e)=>setaddress(e.target.value)}
                className='border p-1 rounded w-full'
              />
            </div>
            <div>
              <label className='block font-semibold'>Blood Group</label>
              <input
                type='text'
                name='blood_group'
                value={bloodgroup}
                onChange={(e)=>setbloodgroup(e.target.value)}
                className='border p-1 rounded w-full'
              />
            </div>
            <div className='flex space-x-4'>
              <button
                className='bg-green-500 text-white px-2 py-1 rounded'
                onClick={handleSubmit}
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
