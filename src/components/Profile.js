// import React, { useState,useEffect } from 'react';
// import Appointment from './Appointment';
// import SaveDoctor from './SaveDoctor';

// const Profile = () => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [firstname, setfirstname] = useState("");
//   const [lastname, setlastname] = useState("");
//   const [Phoneno, setPhoneno] = useState(0);
//   const [address, setaddress] = useState("");
//   const [dob, setdob] = useState("");
//   const [Bio, setBio] = useState("");
//   const [gender, setgender] = useState("");
//   const [bloodgroup, setbloodgroup] = useState("");
//   const [profiledata,setprofiledata] = useState([]);
//   const [password , setPassword] = useState("")
//   const [rpassword , setrPassword] = useState("")


//   const handleSubmit = async(e)=>{
//     e.preventDefault();
//     try {
//         const id = localStorage.getItem("userId");
//         const response = await fetch(`https://doctors-backend-ztcl.onrender.com/updatesettings/${id}`, {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({firstname,lastname,Phoneno,address,dob,Bio,gender,bloodgroup,password,rpassword}),
//         });

//         if (response.ok) {
//           alert("Updated");
//           setIsDialogOpen(false)
//         }else {
//           alert("something went wrong...please check credential");
//         }
//       } catch (error) {
//         console.error("Error during registration:", error);
//       }
//  }

//  const fetchData = async () => {
//   try {
//     const sessionToken=localStorage.getItem("token");
// const response = await fetch(
//   "https://doctors-backend-ztcl.onrender.com/users",
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({sessionToken}),
//   }
// );
// if (response.ok) {
//   const data = await response.json();
//   setprofiledata(data)
// } else {
//   alert("Something went wrong");
// }
// } catch (error) {
// console.error("Error during login:", error);
// }
// }

// useEffect(() => {
//   fetchData();
// }, []);

//   return (
//     <div className='flex flex-col lg:flex-row justify-around p-3 lg:p-0 mb-3 space-y-3 lg:space-y-0'>
//       {
//           profiledata.filter((e) => (e._id === localStorage.getItem("userId"))).map(profiledata =>(
//       <div className='border border-black lg:w-96 p-4 space-y-4 h-fit'>
//         <div className='flex flex-col items-center justify-center space-y-2'>
//           <img src='/login.png' alt='Loading...' className='w-80 h-80 rounded-full border' />
//           <p>{profiledata.firstname} {profiledata.lastname}</p>
//           <p>{profiledata.Bio}</p>
//         </div>
//         <div>
//           <div className='flex items-center space-x-3 text-lg'>
//             <p className='font-semibold'>Gender</p>
//             <p className='font-light'>{profiledata.gender}</p>
//           </div>
//           <div className='flex items-center space-x-3 text-lg'>
//             <p className='font-semibold'>DOB</p>
//             <p className='font-light'>{profiledata.dob}</p>
//           </div>
//           <div className='flex items-center space-x-3 text-lg'>
//             <p className='font-semibold'>Phone No</p>
//             <p className='font-light'>{profiledata.Phoneno}</p>
//           </div>
//           <div className='flex items-center space-x-3 text-lg'>
//             <p className='font-semibold'>Address</p>
//             <p className='font-light'>{profiledata.address}</p>
//           </div>
//           <div className='flex items-center space-x-3 text-lg'>
//             <p className='font-semibold'>Blood Group</p>
//             <p className='font-light'>{profiledata.bloodgroup}</p>
//           </div>
//         </div>
//         <div className='flex items-center justify-center'>
//           <button
//             className='bg-[#276A7B] text-white px-2 py-1 rounded-lg'
//             onClick={() => setIsDialogOpen(true)}
//           >
//             Update Setting
//           </button>
//         </div>
//       </div>
//           ))}
//       {isDialogOpen && (
//         <div className=' fixed  overflow-y-scroll inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75'>
//           <div className='bg-white p-4 rounded-lg space-y-4 w-96'>
//             <h2 className='text-xl bg-[#007569] rounded-lg py-1 text-center text-white px-2 font-bold'>Update Setting</h2>


//             <div>
//               <label className='block font-semibold'>First Name</label>
//               <input
//                 type='text'
//                 name='name'
//                 value={firstname}
//                 onChange={(e)=>setfirstname(e.target.value)}
//                 className='border p-1 rounded w-full'
//               />
//             </div>
//             <div>
//               <label className='block font-semibold'>Last Name</label>
//               <input
//                 type='text'
//                 name='name'
//                 value={lastname}
//                 onChange={(e)=>setlastname(e.target.value)}
//                 className='border p-1 rounded w-full'
//               />
//             </div>
//             <div>
//               <label className='block font-semibold'>Age</label>
//               <input
//                 type='text'
//                 name='age'
//                 value={Bio}
//                 onChange={(e)=>setBio(e.target.value)}
//                 className='border p-1 rounded w-full'
//               />
//             </div>
//             <div>
//               <label className='block font-semibold'>Gender</label>
//               <input
//                 type='text'
//                 name='gender'
//                 value={gender}
//                 onChange={(e)=>setgender(e.target.value)}
//                 className='border p-1 rounded w-full'
//               />
//             </div>
//             <div>
//               <label className='block font-semibold'>DOB</label>
//               <input
//                 type='text'
//                 name='dob'
//                 value={dob}
//                 onChange={(e)=>setdob(e.target.value)}
//                 className='border p-1 rounded w-full'
//               />
//             </div>
//             <div>
//               <label className='block font-semibold'>Phone No</label>
//               <input
//                 type='text'
//                 name='phone number'
//                 value={Phoneno}
//                 onChange={(e)=>setPhoneno(e.target.value)}
//                 className='border p-1 rounded w-full'
//               />
//             </div>
//             <div>
//               <label className='block font-semibold'>Address</label>
//               <input
//                 type='text'
//                 name='address'
//                 value={address}
//                 onChange={(e)=>setaddress(e.target.value)}
//                 className='border p-1 rounded w-full'
//               />
//             </div>
//             <div>
//               <label className='block font-semibold'>Blood Group</label>
//               <input
//                 type='text'
//                 name='blood_group'
//                 value={bloodgroup}
//                 onChange={(e)=>setbloodgroup(e.target.value)}
//                 className='border p-1 rounded w-full'
//               />
//             </div>



//             <div className='mb-4'>
//           <label className='block text-gray-700 w-fit mb-2' htmlFor='password'>Password</label>
//           <input 
//             id='password'
//             type='password' 
//             value={password}
//             onChange={(e)=>setPassword(e.target.value)}
//             placeholder='Enter Password'
//             className='w-full px-3 py-2 border rounded'
//           />
//         </div>

//         <div className='mb-4'>
//           <label className='block text-gray-700 w-fit mb-2' htmlFor='retype-password'>ReType Password</label>
//           <input 
//             id='retype-password'
//             type='password' 
//             value={rpassword}
//             onChange={(e)=>setrPassword(e.target.value)}
//             placeholder='ReType Password'
//             className='w-full px-3 py-2 border rounded'
//           />
//         </div>

//             <div className='flex space-x-4'>
//               <button
//                 className='bg-green-500 text-white px-2 py-1 rounded'
//                 onClick={handleSubmit}
//               >
//                 Save
//               </button>
//               <button
//                 className='bg-red-500 text-white px-2 py-1 rounded'
//                 onClick={() => setIsDialogOpen(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

// <div className='md:w-3/5 space-y-3'>
//       <Appointment/>
//       <SaveDoctor/>
// </div>
//     </div>
//   );
// };

// export default Profile;










// import React, { useState, useEffect } from 'react';
// import Appointment from './Appointment';
// import SaveDoctor from './SaveDoctor';

// const Profile = () => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [email, setEmail] = useState("")
//   const [firstname, setfirstname] = useState("");
//   const [lastname, setlastname] = useState("");
//   const [Phoneno, setPhoneno] = useState("");
//   const [address, setaddress] = useState("");
//   const [dob, setdob] = useState("");
//   const [bloodgroup, setbloodgroup] = useState("");
//   const [profiledata, setprofiledata] = useState([]);
//   const [password, setPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [retypeNewPassword, setRetypeNewPassword] = useState("");
//   const [location, setlocation] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (newPassword !== retypeNewPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     try {
//       const id = localStorage.getItem("userId");
//       const response = await fetch(`https://doctors-backend-ztcl.onrender.com/updatesettings/${id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ firstname, email, lastname, location, Phoneno, address, dob,  bloodgroup, password: newPassword }),
//       });

//       if (response.ok) {
//         alert("Updated");
//         setIsDialogOpen(false)
//       } else {
//         alert("Something went wrong...please check credentials");
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//     }
//   }

//   const fetchData = async () => {
//     try {
//       const sessionToken = localStorage.getItem("token");
//       const response = await fetch(
//         "https://doctors-backend-ztcl.onrender.com/users",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ sessionToken }),
//         }
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setprofiledata(data)
//       } else {
//         alert("Something went wrong");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className='flex flex-col lg:flex-row justify-around p-3 lg:p-0 mb-3 space-y-3 lg:space-y-0'>
//       {profiledata.filter((e) => (e._id === localStorage.getItem("userId"))).map(profiledata => (
//         <div className='border border-black lg:w-96 p-4 space-y-4 h-fit' key={profiledata._id}>
//           <div className='flex flex-col items-center justify-center space-y-2'>
//             <img src='/login.png' alt='Loading...' className='w-80 h-80 rounded-full border' />
//             <p>{profiledata.firstname} {profiledata.lastname}</p>
//             <p>{profiledata.Bio}</p>
//           </div>
//           <div>
//             <div className='flex items-center space-x-3 text-lg'>
//               <p className='font-semibold'>Gender</p>
//               <p className='font-light'>{profiledata.gender}</p>
//             </div>
//             <div className='flex items-center space-x-3 text-lg'>
//               <p className='font-semibold'>DOB</p>
//               <p className='font-light'>{profiledata.dob}</p>
//             </div>
//             <div className='flex items-center space-x-3 text-lg'>
//               <p className='font-semibold'>Phone No</p>
//               <p className='font-light'>{profiledata.Phoneno}</p>
//             </div>
//             <div className='flex items-center space-x-3 text-lg'>
//               <p className='font-semibold'>Address</p>
//               <p className='font-light'>{profiledata.address}</p>
//             </div>
//             <div className='flex items-center space-x-3 text-lg'>
//               <p className='font-semibold'>Blood Group</p>
//               <p className='font-light'>{profiledata.bloodgroup}</p>
//             </div>
//           </div>
//           <div className='flex items-center justify-center'>
//             <button
//               className='bg-[#276A7B] text-white px-2 py-1 rounded-lg'
//               onClick={() => setIsDialogOpen(true)}
//             >
//               Update Setting
//             </button>
//           </div>
//         </div>
//       ))}
//       {isDialogOpen && (
//         <div className='fixed inset-0 flex items-center h-full justify-center  overflow-y-auto bg-gray-500 bg-opacity-75'>
//           <div className=' p-4 rounded-lg bg-[#F6F9FF] space-y-4 w-[500px] max-h-full'>
//             <h2 className='text-xl bg-[#007569] rounded-lg py-1 text-center text-white px-2 font-bold'>Update Setting</h2>

//             <p>Personal Information</p>
//             <div className='flex flex-row gap-4'>
//               <div >
//                 <label className=' font-semibold'>First Name</label>
//                 <input
//                   type='text'
//                   placeholder='first name'
//                   name='name'
//                   value={firstname}
//                   onChange={(e) => setfirstname(e.target.value)}
//                   className='border p-1 rounded w-full'
//                 />
//               </div>
//               <div>
//                 <label className='font-semibold'>Last Name</label>
//                 <input
//                   type='text'
//                   name='name'
//                   value={lastname}
//                   onChange={(e) => setlastname(e.target.value)}
//                   className='border p-1 rounded w-full'
//                 />
//               </div>
//             </div>

//             <div className='flex flex-row  gap-4 justify-between'>
//               <div className=' w-full'>
//                 <label className='block font-semibold'>E-mail</label>
//                 <input
//                   type='text'
//                   name='email'
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className='border p-1 rounded w-full'
//                 />
//               </div>
//               <div className=' w-full'>
//                 <label className='block font-semibold'>Phone No</label>
//                 <input
//                   type='text'
//                   name='phone number'
//                   value={Phoneno}
//                   onChange={(e) => setPhoneno(e.target.value)}
//                   className='border p-1 rounded w-full'
//                 />
//               </div>

//             </div>


//             <div className='flex flex-row  gap-4 justify-between'>
//               <div className=' w-full'>
//                 <label className='block font-semibold'>DOB</label>
//                 <input
//                   type='date'
//                   name='dob'
//                   value={dob}
//                   onChange={(e) => setdob(e.target.value)}
//                   className='border p-1 rounded w-full'
//                 />
//               </div>


//               <div className='w-full'>
//                 <label className='block font-semibold' htmlFor='location'>Location</label>
//                 <input
//                   id='location'
//                   type='text'
//                   placeholder='Enter Location'
//                   value={location}
//                   onChange={(e) => setlocation(e.target.value)}
//                   className='w-full px-3 py-2 border rounded'
//                 />
//               </div>
//             </div>



//             <div className='flex flex-row  gap-4 justify-between'>


//             <div className='w-full'>
//                 <label className='block font-semibold'>Blood Group</label>
//                 <input
//                   type='text'
//                   name='blood_group'
//                   value={bloodgroup}
//                   onChange={(e) => setbloodgroup(e.target.value)}
//                   className='border p-1 rounded w-full'
//                   autoComplete='blood group'
//                 />
//               </div>
//               <div className='w-full'>
//                 <label className='block font-semibold'>Address</label>
//                 <input
//                   type='text'
//                   name='address'
//                   value={address}
//                   onChange={(e) => setaddress(e.target.value)}
//                   className='border p-1 rounded w-full'
//                 />
//               </div>




//             </div>



//             <h2 className='block font-semibold text-2xl'>Change Password</h2>

//             <div className='mb-4'>
//               <label className='block text-gray-700 w-fit mb-2' htmlFor='new-password'>New Password</label>
//               <input
//                 id='new-password'
//                 type='password'
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 placeholder='Enter New Password'
//                 className='w-full px-3 py-2 border rounded'
//                 autoComplete='new-password'
//               />
//             </div>

//             <div className='mb-4'>
//               <label className='block text-gray-700 w-fit mb-2' htmlFor='retype-new-password'>Re-Enter New Password</label>
//               <input
//                 id='retype-new-password'
//                 type='password'
//                 value={retypeNewPassword}
//                 onChange={(e) => setRetypeNewPassword(e.target.value)}
//                 placeholder='Re-Enter New Password'
//                 className='w-full px-3 py-2 border rounded'
//               />
//             </div>


//             <div className='flex space-x-4'>
//               <button
//                 className='bg-green-500 text-white px-2 py-1 rounded'
//                 onClick={handleSubmit}
//               >
//                 Save
//               </button>
//               <button
//                 className='bg-red-500 text-white px-2 py-1 rounded'
//                 onClick={() => setIsDialogOpen(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className='md:w-3/5 space-y-3'>
//         <Appointment />
//         <SaveDoctor />
//       </div>
//     </div>
//   );
// };

// export default Profile;







import React, { useState, useEffect } from 'react';
import Appointment from './Appointment';
import SaveDoctor from './SaveDoctor';

const Profile = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [bloodgroup, setBloodgroup] = useState("");
  const [profiledata, setProfiledata] = useState([]);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypeNewPassword, setRetypeNewPassword] = useState("");
  const [location, setLocation] = useState("");

  const handlePersonalInfoSubmit = async (e) => {
    e.preventDefault();
    try {
      const id = localStorage.getItem("userId");
      const response = await fetch(`https://doctors-backend-ztcl.onrender.com/updatesettings/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname, email, lastname, location, Phoneno, address, dob, bloodgroup, password: newPassword }),
      });

      if (response.ok) {
        alert("Personal Information Updated");
        setIsDialogOpen(false)
      } else {
        alert("Something went wrong...please check credentials");
      }
    } catch (error) {
      console.error("Error during update:", error);
    }
  }

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== retypeNewPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const id = localStorage.getItem("userId");
      const response = await fetch(`https://doctors-backend-ztcl.onrender.com/updatepassword/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: newPassword }),
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='flex flex-col lg:flex-row justify-around p-3 lg:p-0 mb-3 space-y-3 lg:space-y-0'>
      {profiledata.filter((e) => (e._id === localStorage.getItem("userId"))).map(profile => (
        <div className='border border-black lg:w-96 p-4 space-y-4 h-fit' key={profile._id}>
          <div className='flex flex-col items-center justify-center space-y-2'>
            <img src='/login.png' alt='Loading...' className='w-80 h-80 rounded-full border' />
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



            <button
              className='bg-[#276A7B] text-white px-2 py-1 rounded'
              onClick={handlePersonalInfoSubmit}
            >
              Save Changes
            </button>

            <h2 className='block font-semibold text-2xl'>Change Password</h2>

            <div className='mb-4'>
              <label className='block text-gray-700 w-fit mb-2' htmlFor='new-password'>New Password</label>
              <input
                id='new-password'
                type='password'
                value={newPassword}
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
