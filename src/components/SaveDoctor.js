import React, { useEffect, useState } from 'react';
import { FaCalendarPlus, FaChevronDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { useSavedDoctors } from '../SavedDoctorsContext';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SaveDoctor = () => {

  const [savedDoctors, setSavedDoctors] = useState()

  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    const handleSavedData = async () => {

      try {

        const data = await fetch("https://doctors-backend-ztcl.onrender.com/getsaved",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          }
        );

        const dataResponse = await data.json()

        console.log(dataResponse);

        const storedId = localStorage.getItem('userId');

        // Filter bookings based on both type and _id matching storedId
        const matchedBookings = dataResponse.filter(el => el.userid === storedId);
        console.log(matchedBookings);
        setSavedDoctors(matchedBookings);
        console.log(savedDoctors);
      } catch (error) {
        console.log(error);
      }

    }

    handleSavedData()
  }, [])


  const removeLiked = async (id) => {
    try {
      const data = await fetch(`https://doctors-backend-ztcl.onrender.com/deletesaved/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        }
      );

      console.log(id);

      if (data.ok) {
        alert("removed Liked")
      }
      else {
        alert("Please try again")
      }
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className={`flex p-3 justify-between transition-all duration-300 ${dropDown ? 'bg-white text-black h-fit border border-[#276A7B] p-0 items-start' : 'bg-[#276A7B] text-white h-fit'}`}>
      {
        dropDown ? (
          <>
            <div className='w-full'>
              <div className='border border-[#276A7B] flex w-full justify-between items-center p-3'>
                <div className='flex items-center space-x-1'>
                  <FaCalendarPlus />
                  <p>Saved Doctors</p>
                </div>
                <div className='flex items-center space-x-2'>
                  <p>|</p>
                  <button onClick={() => setDropDown(false)}><FaChevronDown className='text-2xl font-bold ' /></button>
                </div>
              </div>

              <div className='h-[260px] overflow-y-scroll'>
                {savedDoctors.map((el, index) => (

                  <div key={index} className='flex border rounded-md border-gray-600 mb-2 mt-2 p-3'>
                    <div>
                      <img src={el.profilepic} className='w-40 h-40' alt={el.name} />
                    </div>
                    <div className='flex items-center justify-between w-full'>
                      <div className='space-y-2 '>
                        <p className=' text-xl  text-gray-600 font-bold'>{el.firstname}</p>
                        <p className='text-[#007569]  text-sm font-semibold'>{el.degree}</p>
                        <p>{el.clinic}</p>
                        <p>⭐⭐⭐⭐⭐</p>
                      </div>
                      <div className='space-x-3'>
                        <div className='flex gap-2 pb-[80px] pl-[120px] cursor-pointer'>
                          <span><FaHeart onClick={() => removeLiked(el._id)} className='text-[#007569] text-xl ' />
                          </span>
                        </div>
                        <Link to={`/doctors/profile/${el._id}`}>
                          <button className='border border-[#007569] text-sm md:text-md text-[#007569] px-1  py-1 rounded-md'>View Profile</button>
                        </Link>
                        <Link to={`/appointment/${el._id}`}>
                          <button className='bg-[#276A7B] text-white px-2 py-1 rounded-lg'>Book Now</button>
                        </Link>
                      </div>
                    </div>
                  </div>

                ))
                }
              </div>

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
              <button onClick={() => setDropDown(true)}><IoIosArrowUp className='text-2xl font-bold ' /></button>
            </div>
          </>
        )
      }
    </div>
  );
};

export default SaveDoctor;
