import React, { useState } from 'react'
import { SlCalender } from "react-icons/sl";
import { IoIosArrowUp } from "react-icons/io";
import { FaCalendarPlus } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
const SaveDoctor = () => {
  const [dropDown, setDropDown] = useState(false);
  const data =[
    {
      id:1,
      name: "guf",
      degree: "Dentist",
      clinicName: "kugif",
      available: ["mon", "wed", "thus", "sun"],
      location: "america",
      available: "true",
    },
    {
      id:2,
      name: "gu",
      degree: "goi",
      clinicName: "gilllglg",
      available: ["mon", "wed", "thus", "sun"],
      location: "ifiiyfyf",
      available: "true",
    },
  ]
  return (
    <div className={`  flex p-3  justify-between transition-all duration-300 ${dropDown ? 'bg-white text-black h-fit border border-[#276A7B] p-0 items-start' : 'bg-[#276A7B] text-white h-fit'}`}>
    {
      dropDown ? (
        <> 
        <div className='w-full  '>
        <div className='border border-[#276A7B]  flex w-full justify-between items-center p-3'>
           <div className='flex items-center space-x-1'>
            <FaCalendarPlus />
            <p>Saved Doctors</p>
          </div>
          <div className='flex items-center space-x-2'>
            <p>|</p>
            <button onClick={() => setDropDown(false)}><FaChevronDown className='text-2xl font-bold '/></button>
        </div>
          </div>

        {
          data.map((el)=>(
          <div className='flex p-3'>
            <div>
              <img src='/login.png' className='w-24 h-24'/>
            </div>
            <div className='flex items-center justify-between w-full'>
              <div>
          <div className='space-y-2'>
            <p>{el.name}</p>
            <p>{el.degree}</p>
            <p>{el.clinicName}</p>
            <p>⭐⭐⭐⭐⭐⭐</p>
          </div>
          <div>
          </div>
              </div>

              <div className='space-x-3'>
                <button className='border border-[#276A7B] rounded-lg px-2 py-1'>View Profile</button>
                <button className='bg-[#276A7B] text-white px-2 py-1 rounded-lg'>Book Now</button>
              </div>
            </div>
          </div>
          ))
        }
        </div>
        </>
      ) : (
        <>
          <div className='flex items-center space-x-1'>
            <FaCalendarPlus />
            <p>Saved Doctors</p>
          </div>
          <div className='flex items-center space-x-2'>
            <p>|</p>
            <button onClick={() => setDropDown(true)}><IoIosArrowUp className='text-2xl font-bold '/></button>
          </div>
        </>
      )
    }
  </div>
  )
}

export default SaveDoctor
