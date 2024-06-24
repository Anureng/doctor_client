import React, { useEffect, useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { json, useNavigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
const CreateAppointment = () => {
  const [date, onChange] = useState(new Date());
  const[name,setName] = useState("")
  const[Currentproblem,setCurrentproblem] = useState("")
  const[email,setEmail] = useState("")
  const[mob,setMob] = useState("")
  const[time,setTime] = useState("")
  const navigate = useNavigate()
  const { id } = useParams();

  const datee = ["11:00 AM" ,"12:00 PM","01:30 PM","03:00 PM","04:00 PM","05:00 PM","07:30 PM" ]

  const [filteredBookings, setFilteredBookings] = useState([]);
  useEffect(()=>{
      const fetchData = async() =>{
       // const response = await axios.post('​https://doctors-backend-ztcl.onrender.com/getallbookings',{})
       const data = await fetch("https://doctors-backend-ztcl.onrender.com/users",
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({ }),
         }
       );
       const dataResponse = await data.json()
   
       console.log(dataResponse);
   
       const storedId = localStorage.getItem('userId');
       if (storedId) {
          // Filter bookings based on both type and _id matching storedId
          const matchedBookings = dataResponse.filter(el => el._id === id );
          console.log('Matched bookings:', matchedBookings);
      
          setFilteredBookings(matchedBookings);
      }
  
       console.log(filteredBookings);
      }
      fetchData()
     },[filteredBookings])

  useEffect(()=>{
   const fetchData = async() =>{
    // const response = await axios.post('​https://doctors-backend-ztcl.onrender.com/getallbookings',{})
    const data = await fetch("https://doctors-backend-ztcl.onrender.com/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ }),
      }
    );
    const dataResponse = await data.json()

    console.log(dataResponse);

    const find = dataResponse.map((el)=>el._id);

    

    if(find.includes(localStorage.getItem("userId")))
      {
        console.log("found");
      }
      else {
        console.log("not found");
      }
   }
   fetchData()
  },[])

  const handleAppointment = async() =>{
    try {
      const doct = id
      const type = filteredBookings.map((el)=>el.type).join(' ')
      console.log(type);
      const fee = filteredBookings.map((el)=>el.fees).join(' ')
      const doctorname =filteredBookings.map((el)=>el.firstname).join('')
      const payment = false
      const userid =  localStorage.getItem("userId");
      const response = await fetch(
        "https://doctors-backend-ztcl.onrender.com/book",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userid,name ,mob ,time , date , email , doct ,doctorname , Currentproblem,type,fee,payment}),
        }
      );

      if (response.ok) {
        navigate(`/payment/${id}`)
      } else {
        alert("something went wrong...please check credential");
      }
      console.log(response);
    } catch (error) {
      console.error("Error during login:", error);
    }
  }
  return (
    <div className='flex  justify-evenly p-4 flex-col lg:flex-row space-y-3 lg:space-y-0'>
      <div className='border lg:w-2/5 bg-[#F6F9FF] rounded-xl space-y-3'>
        <div className='bg-[#007569] text-white p-2 rounded-xl'>Book Your Appointment</div>

      <div className='p-3 space-y-3'>
        <div>
          <div className='space-y-4'>

            <div className=' flex flex-col md:flex-row items-center justify-between'>
            <div className='flex space-y-2 flex-col'>
            <label className=' font-light'>Patient Name</label>
            <input type='text' className='px-2 py-1 rounded-lg focus:outline-none' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Patient Name'/>
            </div>
             
            <div className='flex space-y-2 flex-col'>
            <label className=' font-light'>Disease</label>
            <input type='text' value={Currentproblem} onChange={(e)=>setCurrentproblem(e.target.value)} className='px-2 py-1 rounded-lg focus:outline-none' placeholder='Patient Name'/>
            </div>
            </div>

            <div className=' flex flex-col md:flex-row items-center justify-between'>
            <div className='flex space-y-2 flex-col'>
            <label className=' font-light'>Your Email</label>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='px-2 py-1 rounded-lg focus:outline-none' placeholder='Your Email'/>
            </div>
             
            <div className='flex space-y-2 flex-col'>
            <label className=' font-light'>Your Phone</label>
            <input type='text' className='px-2 py-1 rounded-lg focus:outline-none' value={mob} onChange={(e)=>setMob(e.target.value)} placeholder='Your Phone'/>
            </div>
            </div>

          </div>
        </div>

        <div className='space-y-3 divide-y '>
          <div className=' '>
          <p>Location</p>
          <div className='flex items-center justify-between rounded-t-lg p-3 bg-[#EFEFEF]'>
            <p>Your Clinic Name</p>
            <p className='font-light'>{filteredBookings.map((el)=>el.clinic)}</p>
          </div>
          </div>
          
          <div className='bg-[#EFEFEF] divide-y divide-blue-200 '>
          <div className='flex items-center justify-between  p-3 '>
            <p>Consultation Fee</p>
            <p className='font-light'>{filteredBookings.map((el)=>el.fees)}</p>
          </div>

          

          <div className='flex items-center justify-between  p-3 text-[#007569] font-light'>
            <p>Total</p>
            <p className='font-light'>{filteredBookings.map((el)=>el.fees)}</p>
          </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row space-x-4 lg:space-y-3 mt-4'  >
        <Calendar className="" onChange={onChange} value={date} />
        <div className='bg-white md:w-fit h-fit  p-4 space-y-3 rounded-lg'>
          {
            datee.map((el)=>(
              <div className='space-x-3'>
              <button onClick={()=>setTime(el)} className='bg-[#EFEFEF] px-2 py-1 rounded-lg  '>{el}</button>
              </div>
            ))
          }
        </div>
        </div>
      </div>

      <div className='flex items-center justify-center px-2 py-1 text-white rounded-lg'>
        <button className='bg-[#007569] px-2 py-1 text-white rounded-lg' onClick={handleAppointment}>Book Now</button>
      </div>
      </div>

      <div className='border h-fit lg:w-2/5'>
        <div className='bg-[#007569] text-white flex items-center justify-center'>
        <p>Your Order</p>
        </div>

        <div className='p-4 space-y-4'>
        <div className='flex items-center justify-between'>
       <p>Doctor Booking x 1</p>
       <p>{filteredBookings.map((el)=>el.fees)}</p>
        </div>

        <hr/>

        <div className='flex items-center justify-between'>
       <p>Sub Total</p>
       <p>{filteredBookings.map((el)=>el.fees)}</p>
        </div>

        <hr/>

        <div className='flex text-[#007569] items-center justify-between'>
       <p>Total</p>
       <p>{filteredBookings.map((el)=>el.fees)}</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAppointment