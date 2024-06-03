import React, { useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
const CreateAppointment = () => {
  const [value, onChange] = useState(new Date());

  const date = ["11:00 AM" ,"12:00 PM","01:30 PM","03:00 PM","04:00 PM","05:00 PM","07:30 PM" ]
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
            <input type='text' className='px-2 py-1 rounded-lg focus:outline-none' placeholder='Patient Name'/>
            </div>
             
            <div className='flex space-y-2 flex-col'>
            <label className=' font-light'>Disease</label>
            <input type='text' className='px-2 py-1 rounded-lg focus:outline-none' placeholder='Patient Name'/>
            </div>
            </div>

            <div className=' flex flex-col md:flex-row items-center justify-between'>
            <div className='flex space-y-2 flex-col'>
            <label className=' font-light'>Your Email</label>
            <input type='email' className='px-2 py-1 rounded-lg focus:outline-none' placeholder='Patient Name'/>
            </div>
             
            <div className='flex space-y-2 flex-col'>
            <label className=' font-light'>Your Phone</label>
            <input type='text' className='px-2 py-1 rounded-lg focus:outline-none' placeholder='Patient Name'/>
            </div>
            </div>

          </div>
        </div>

        <div className='space-y-3 divide-y '>
          <div className=' '>
          <p>Location</p>
          <div className='flex items-center justify-between rounded-t-lg p-3 bg-[#EFEFEF]'>
            <p>Your Clinic Name</p>
            <p className='font-light'>213 OLD Trafford UK</p>
          </div>
          </div>
          
          <div className='bg-[#EFEFEF] divide-y divide-blue-200 '>
          <div className='flex items-center justify-between  p-3 '>
            <p>Consultation Fee</p>
            <p className='font-light'>500</p>
          </div>

          

          <div className='flex items-center justify-between  p-3 text-[#007569] font-light'>
            <p>Total</p>
            <p className='font-light'>500</p>
          </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row space-x-4 lg:space-y-3 mt-4'  >
        <Calendar className="" onChange={onChange} value={value} />
        <div className='bg-white md:w-fit h-fit  p-4 space-y-3 rounded-lg'>
          {
            date.map((el)=>(
              <div className='space-x-3'>
              <button className='bg-[#EFEFEF] px-2 py-1 rounded-lg  '>{el}</button>
              </div>
            ))
          }
        </div>
        </div>
      </div>

      <div className='flex items-center justify-center px-2 py-1 text-white rounded-lg'>
        <button className='bg-[#007569] px-2 py-1 text-white rounded-lg'>Book Now</button>
      </div>
      </div>

      <div className='border h-fit lg:w-2/5'>
        <div className='bg-[#007569] text-white flex items-center justify-center'>
        <p>Your Order</p>
        </div>

        <div className='p-4 space-y-4'>
        <div className='flex items-center justify-between'>
       <p>Doctor Booking x 1</p>
       <p>500</p>
        </div>

        <hr/>

        <div className='flex items-center justify-between'>
       <p>Sub Total</p>
       <p>500</p>
        </div>

        <hr/>

        <div className='flex text-[#007569] items-center justify-between'>
       <p>Total</p>
       <p>500</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAppointment
