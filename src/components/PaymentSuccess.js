import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from "react-icons/md";
import { useParams } from 'react-router-dom';
const PaymentSuccess = () => {

  const {id} = useParams()
  const [showPopup, setShowPopup] = useState(false);

  const handleAddReviewClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

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

  return (
    <div className='flex items-center justify-center mb-12'>
      <div className='border md:w-2/5 p-4 rounded-lg shadow-lg'>
        <div className='flex items-center'>
          <div>
            <img src='./login.png' alt='Loading...' className='w-36 h-36' />
          </div>
          <div>
            <p>Dr Wanitha</p>
            <p>Dentist</p>
            <p>Mon, Tue, Wed, Thu, Sat</p>
            <p>213 Old Trafford UK, America</p>
          </div>
        </div>

        <hr />

        <div className='space-y-4'>
          <div className='space-y-4'>
            <div className='flex items-center justify-between'>
              <p className='text-lg'>Booking Date:</p>
              <p className='font-light text-lg'>Sun, 30 Apr 2024</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-lg'>Booking Time:</p>
              <p className='font-light text-lg'>10:00AM to 11:00 AM</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-lg'>Disease</p>
              <p className='font-light text-lg'>Fever</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-lg'>Type of Consultation:</p>
              <p className='font-light text-lg'>Clinic Consulting</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-lg'>Consultation:</p>
              <p className='font-light text-lg'>₹500</p>
            </div>
          </div>

          <div className='flex items-center justify-center space-x-3'>
            <button className='border border-[#276A7B] text-[#276A7B] px-2 py-1 rounded-lg'>Back To Home</button>
            <button
              className='bg-[#276A7B] text-white px-2 py-1 rounded-lg'
              onClick={handleAddReviewClick}
            >
              Add Review
            </button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className='fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white w-96 p-6 rounded-lg shadow-lg'>
            <div className='flex items-center justify-between'>
            <h2 className='text-xl mb-4'>Add Your Feedback</h2>
            <MdOutlineCancel className='text-[#276A7B]'  onClick={handleClosePopup}/>
            </div>
            <p>Rate Our Service : ⭐⭐⭐⭐⭐</p>
            <textarea
              className='w-full p-2 border rounded-lg mb-4'
              rows='4'
              placeholder='Write your review here...'
            ></textarea>
            <div className='flex justify-end space-x-3'>
              <button className='bg-[#276A7B] text-white px-4 py-2 rounded-lg'>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentSuccess;
