import React, { useEffect, useState } from 'react'
import NavBar from "../components/NavBar"
import PaymentContent from '../components/PaymentContent'
import Circles from '../components/ConcentricCircle/Circles'
import Footer from "../components/Footer"
import { useParams } from 'react-router-dom'
function Payment() {


  const {id} = useParams()
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
   
   
       const storedId = localStorage.getItem('userId');
       if (storedId) {
          // Filter bookings based on both type and _id matching storedId
          const matchedBookings = dataResponse.filter(el => el._id === id );
      
          setFilteredBookings(matchedBookings);
      }
      }
      fetchData()
     },[filteredBookings])
  return (
    <>
      <NavBar className="relative z-50" />
      <div className='flex md:flex-row  justify-between  h-fit w-[95%] mx-auto flex-col relative z-10'>
        <PaymentContent />
        <div className='flex flex-col  md:w-[40%] mx-3 h-fit  mt-10 md:mt-[110px] border-[2px] border-[#BEBEBE]'>
          <div className=' justify-between items-center bg-[#007569] text-white  text-center  py-2 font-bold'>Your order</div>
          <div className=' flex flex-row justify-between items-center border-b-2 border-[#BEBEBE] px-2 w-[90%] text-xl py-2 mx-auto'> Doctor Booking  x 1 <span> {filteredBookings.map((el)=>el.fees)}</span></div>
          <div className=' flex flex-row justify-between items-center border-b-2 border-[#BEBEBE] px-2 w-[90%] text-xl py-2 mx-auto'> SubTotal <span> {filteredBookings.map((el)=>el.fees)}</span></div>
          <div className=' flex flex-row justify-between items-center text-[#007569] px-2 w-[90%] text-xl py-2 mx-auto'> Total <span> {filteredBookings.map((el)=>el.fees)}</span></div>
        </div>
      </div>

      <Circles className="  z-[-50] " />



      <Footer />

    </>
  )
}

export default Payment