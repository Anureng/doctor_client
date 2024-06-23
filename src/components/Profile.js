import React, { useState, useEffect } from 'react';
import {storage} from "../firebase.config";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import Appointment from './Appointment';
import SaveDoctor from './SaveDoctor';
import {storage} from "../firebase.config";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setgender] = useState("");
  const [bloodgroup, setBloodgroup] = useState("");
  const [profiledata, setProfiledata] = useState([]);
  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [retypeNewPassword, setRetypeNewPassword] = useState("");
  const [location, setLocation] = useState("");
  const [profilepic, setprofilepic] = useState("")
  const {logout} = useAuth();
  const nav=useNavigate();

  
  const handlePersonalInfoSubmit = async (e) => {
    e.preventDefault();
    try {
      const id = localStorage.getItem("userId");
      const response = await fetch(`https://doctors-backend-ztcl.onrender.com/updatesettings/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname, email, lastname, location, Phoneno, address, dob, bloodgroup, password: newPassword, profilepic:profilepic }),
      });

      if (response.ok) {
        alert("Personal Information Updated");
        fetchData();
        setIsDialogOpen(false)
      } else {
        alert("Something went wrong...please check credentials");
      }
    } catch (error) {
      console.error("Error during update:", error);
    }
  }

  const uploadimage = async(e) =>{
    const id = localStorage.getItem("userId");
    const imageRef1 = ref(storage,id);
    if (e) {
        uploadBytes(imageRef1, e).then(() => {
            getDownloadURL(imageRef1).then((url) => {
                setProfilepic(url);
                alert("uploaded")
            }).catch((error) => {
                console.log(error.message, "error geting the image url");
            })
        }).catch((error) => {
            console.log(error.message);
        })
    }
  }


  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (newpassword !== retypeNewPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await fetch(`https://doctors-backend-ztcl.onrender.com/auth/updatepassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email,newpassword}),
      });

      if (response.ok) {
        alert("Password Updated");
        setIsDialogOpen(false)
      } else {
        alert("Something went wrong...please try again later");
      }
    } catch (error) {
      console.error("Error during password update:", error);
    }
  }

  const fetchData = async () => {
    try {
      const sessionToken = localStorage.getItem("token");
      const response = await fetch(
        "https://doctors-backend-ztcl.onrender.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sessionToken }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProfiledata(data)
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }


  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      try {
        const id = localStorage.getItem("userId");
        const response = await fetch(`https://doctors-backend-ztcl.onrender.com/deleteuser/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          alert("Account Deleted");
          localStorage.clear();
          window.location.href = "/login";
        } else {
          alert("Something went wrong...please try again later");
        }
      } catch (error) {
        console.error("Error during account deletion:", error);
      }
    }
  }


 

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='flex flex-col lg:flex-row justify-around p-3 lg:p-0 mb-3 space-y-3 lg:space-y-0'>
      {profiledata.filter((e) => (e._id === localStorage.getItem("userId"))).map(profile => (
        <div className='border border-black lg:w-96 p-4 space-y-4 h-fit' key={profile._id}>
          <div className='flex flex-col items-center justify-center space-y-2'>
            <img src={profile.profilepic} alt='Loading...' className='w-80 h-80 overflow-hidden rounded-full border' />
            <p>{profile.firstname} {profile.lastname}</p>
            <p>{profile.Bio}</p>
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
              <p className='font-light'>{profile.Phoneno}</p>
            </div>
            <div className='flex items-center space-x-3 text-lg'>
              <p className='font-semibold'>Address</p>
              <p className='font-light'>{profile.address}</p>
            </div>
            <div className='flex items-center space-x-3 text-lg'>
              <p className='font-semibold'>Blood Group</p>
              <p className='font-light'>{profile.bloodgroup}</p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-6'>
            <button
              className='bg-[#276A7B] text-white px-2 py-1 rounded-lg'
              onClick={() => setIsDialogOpen(true)}
            >
              Update Setting
            </button>
            <button
              className='bg-[#276A7B] text-white px-2 py-1 rounded-lg'
              onClick={() =>{
                logout()
              nav("/")
              }}
            >
              Logout
            </button>
          </div>
        </div>
      ))}
      {isDialogOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75'>
          <div className='p-4 rounded-lg bg-[#F6F9FF] space-y-4 max-h-[90vh] overflow-y-auto w-[500px]'>
            <h2 className='text-xl bg-[#007569] rounded-lg py-1 text-center text-white px-2 font-bold'>Update Setting</h2>

            <p className='font-semibold text-2xl'>Personal Information</p>
            <div className='flex flex-row gap-4'>
              <div >
                <label className=' font-semibold'>First Name</label>
                <input
                  type='text'
                  placeholder='First name'
                  name='name'
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  className='border p-1 rounded w-full'
                />
              </div>
              <div>
                <label className='font-semibold'>Last Name</label>
                <input
                  placeholder='Last Name'
                  type='text'
                  name='name'
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  className='border p-1 rounded w-full'
                />
              </div>
            </div>

            <div className='flex flex-row  gap-4 justify-between'>
              <div className=' w-full'>
                <label className='block font-semibold'>E-mail</label>
                <input
                  placeholder='E-mail'
                  type='text'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='border p-1 rounded w-full'
                />
              </div>
              <div className=' w-full'>
                <label className='block font-semibold'>Phone No</label>
                <input
                  placeholder='Phone No'
                  type='text'
                  name='phone number'
                  value={Phoneno}
                  onChange={(e) => setPhoneno(e.target.value)}
                  className='border p-1 rounded w-full'
                />
              </div>
            </div>

            <div className='flex flex-row  gap-4 justify-between'>
            <div className='w-full'>
                <label className='block font-semibold' htmlFor='gender'>Gender</label>
                <select
                  id='gender'
                  type='text'
                  placeholder='Enter gender'
                  value={gender}
                  onChange={(e) => setgender(e.target.value)}
                  className='w-full px-3 py-2 border rounded'
                >
                  <option value=''>Select gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                </select>
              </div>
              </div>
            <div className='flex flex-row  gap-4 justify-between'>
              <div className=' w-full'>
                <label className='block font-semibold'>DOB</label>
                <input
                  type='date'
                  name='dob'
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className='border p-1 rounded w-full'
                />
              </div>
              <div className='w-full'>
                <label className='block font-semibold' htmlFor='location'>Location</label>
                <select
                  id='location'
                  type='text'
                  placeholder='Enter Location'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className='w-full px-3 py-2 border rounded'
                >
                  <option value=''>Select country</option>
                  <option value='India'>India</option>
                  <option value='China'>China</option>
                  <option value='USA'>USA</option>
                  <option value='Japan'>Japan</option>
                  <option value='Russia'>Russia</option>
                  <option value='Pakistan'>Pakistan</option>
                  <option value='Saudi Arabia'>Saudi Arabia</option>
                  <option value='Canada'>Canada</option>
                </select>
              </div>
            </div>

            
            


            <div className='flex flex-row  gap-4 justify-between'>
              <div className='w-full'>
                <label className='block font-semibold'>Blood Group</label>
                <select
                  name='blood_group'
                  value={bloodgroup}
                  onChange={(e) => setBloodgroup(e.target.value)}
                  className='border p-1 rounded w-full'
                >
                  <option value=''>Select Blood Group</option>
                  <option value='A+'>A+</option>
                  <option value='A-'>A-</option>
                  <option value='B+'>B+</option>
                  <option value='B-'>B-</option>
                  <option value='AB+'>AB+</option>
                  <option value='AB-'>AB-</option>
                  <option value='O+'>O+</option>
                  <option value='O-'>O-</option>
                </select>
              </div>

              <div className='w-full'>
                <label className='block font-semibold'>Address</label>
                <input
                  placeholder='Address'
                  type='text'
                  name='address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className='border p-1 rounded w-full'
                />
              </div>
            </div>


            <div className='w-full'>

              <label className='block pb-2 font-semibold'>Profile Picture</label>
              <div className='border-[2px]  py-[6px] rounded-md border-dashed border-[#949494]'>
                <input
                  placeholder='Drop file here to upload'
                  type='file'
                  name='photo'
                  onChange={
                    (e) => {
                        if (e.target.files[0]) {
                            uploadimage(e.target.files[0])
                        }
                    }
                  }
                  className='hidden'
                  id='fileInput'
                />
                <div className='flex flex-row'>
                <label
                  htmlFor='fileInput'
                  className='border-[2px] rounded-md px-2 py-0 text-xs w-fit p-1 text-white bg-[#276A7B] hover:bg-[#25515c] cursor-pointer flex justify-center items-center'
                >
                 Select File
                </label>
                <p className='text-[#949494] pl-1 '>Drop files here to upload</p>
                </div>
              </div>
            </div>


            <button
              className='bg-[#276A7B] text-white px-2 py-1 rounded'
              onClick={handlePersonalInfoSubmit}
            >
              Save Changes
            </button>

            <h2 className='block font-semibold text-2xl'>Change Password</h2>
            <div className='mb-4'>
              <label className='block text-gray-700 w-fit mb-2' htmlFor='new-password'>Email</label>
              <input
                placeholder='E-mail'
                type='text'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='border p-1 rounded w-full'
              />
            </div>
          
            <div className='mb-4'>
              <label className='block text-gray-700 w-fit mb-2' htmlFor='new-password'>New Password</label>
              <input
                id='new-password'
                type='password'
                value={newpassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder='Enter New Password'
                className='w-full px-3 py-2 border rounded'
                autoComplete='new-password'
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 w-fit mb-2' htmlFor='retype-new-password'>Re-Enter New Password</label>
              <input
                id='retype-new-password'
                type='password'
                value={retypeNewPassword}
                onChange={(e) => setRetypeNewPassword(e.target.value)}
                placeholder='Re-Enter New Password'
                className='w-full px-3 py-2 border rounded'
              />
            </div>

            <div className='flex space-x-4'>

              <button
                className='bg-[#276A7B] text-white px-2 py-1 rounded'
                onClick={handlePasswordSubmit}
              >
                Save Password
              </button>
              <button
                className='bg-red-500 text-white px-2 py-1 rounded'
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </button>
            </div>



            <h2 className='block pb-0 text-red-500 font-semibold text-2xl'>Delete Account:</h2>
            <p className=' text-gray-700 text-xs'>
              Do you want to delete the account? Please press below "Delete" button.</p>
            <button
              className='bg-red-500 text-white px-2 py-1 rounded'
              onClick={handleDeleteAccount}
            >
              Delete Account
            </button>
          </div>
        </div>
      )
      }

      <div className='md:w-3/5 space-y-3'>
        <Appointment />
        <SaveDoctor />
      </div>
    </div >
  )
};

export default Profile;
