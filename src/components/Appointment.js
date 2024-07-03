
import React, { useState, useEffect } from 'react';
import { FaCalendarPlus, FaCheckCircle } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa6';
import { IoIosArrowUp } from 'react-icons/io';
import { MdDateRange } from "react-icons/md";
import { IoIosTime } from "react-icons/io";

const Appointment = () => {
  const [dropDown, setDropDown] = useState(false);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('upcoming'); // New state for filter

  const fetchData = async () => {
    try {
      const response = await fetch("https://doctors-backend-ztcl.onrender.com/getallbookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        alert("Something went wrong. Please login again.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const userId = localStorage.getItem("userId");


  // const handleDelete = async (id) => {
  //   try {
  //     const response = await fetch(`https://doctors-backend-ztcl.onrender.com/deletebooking/${id}`, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     if (response.ok) {
  //       setData(data.filter(appointment => appointment._id !== id));
  //     } else {
  //       alert('Failed to delete the appointment.');
  //     }
  //   } catch (error) {
  //     console.error('Error deleting appointment:', error);
  //   }
  // };

  const filteredData = data.filter(e => {
    const appointmentDate = new Date(e.date);
    const today = new Date();
    if (filter === 'upcoming') {
      return appointmentDate >= today && e.userid === userId;
    } else {
      return appointmentDate < today && e.userid === userId;
    }
  });

  return (
    <div className={`flex p-3 justify-between transition-all duration-300 ${dropDown ? 'bg-white text-black h-fit border border-[#276A7B] p-0 items-start' : 'bg-[#276A7B] text-white h-fit'}`}>
      {dropDown ? (
        <>
          <div className='w-full'>
            <div className='border border-[#276A7B] flex w-full justify-between items-center p-3'>
              <div className='flex items-center space-x-1'>
                <FaCalendarPlus />
                <p>Appointment</p>
              </div>
              <div className='flex items-center space-x-2'>
                <p>|</p>
                <button onClick={() => setDropDown(false)}><FaChevronDown className='text-2xl font-bold ' /></button>
              </div>
            </div>
            <div className='flex justify-center space-x-4 p-3'>
              <button
                className={`py-2 px-4 rounded ${filter === 'upcoming' ? 'bg-[#007569] text-white' : 'bg-gray-200 text-black'}`}
                onClick={() => setFilter('upcoming')}
              >
                Upcoming
              </button>
              <button
                className={`py-2 px-4 rounded ${filter === 'completed' ? 'bg-[#007569] text-white' : 'bg-gray-200 text-black'}`}
                onClick={() => setFilter('completed')}
              >
                Completed
              </button>
            </div>
            <div className='overflow-y-scroll lg:h-[350px] md:h-[200px] h-[200px]'>
              {filteredData.map((el) => (
                <div key={el._id} className='flex p-3 border-[2px] rounded-md m-1 border-gray-400'>
                  <div className='flex flex-row gap-2'>
                    <img src='/login.png' className='w-24 h-24' alt='Doctor' />
                    <div className='space-y-2 justify-between flex flex-col md:flex-row'>
                      <div className='justify-between flex flex-col'>
                        <p className='text-xl text-black font-semibold'> Dr {el.doctorname}</p>
                        <p className='text-gray-900 font-semibold'>
                          Problem : {el.Currentproblem ? el.Currentproblem : 'not defined'}
                        </p>
                        <p className='text-[#007569] font-semibold'>consultation fee : {el.fee}</p>
                      </div>
                      <div className='md:pl-10 items-center'>
                        <p className='text-gray-600 text-sm flex gap-2'><MdDateRange className='text-[#007569] text-xl' />  {el.date.substr(0, 10)}</p>
                        <p className='text-gray-600 text-sm flex gap-2'><IoIosTime className='text-[#007569] text-xl' /> {el.time}</p>
                      </div>
                      <div className='lg:pl-[120px] md:pl-16 p-0'> {filter === 'upcoming' ? (
                        <div className='flex lg:pl-[120px] md:pl-16 p-0 gap-2 mt-2'>
                          <button className='py-1 px-3  text-[#007569] font-semibold rounded'>Confirmed</button>
                          {/* <button className='py-1 px-3 bg-red-500 text-white rounded' onClick={() => handleDelete(el._id)}>Delete</button> */}
                        </div>
                      ) : (
                        <div className='lg:pl-[120px] md:pl-16 p-0 flex items-center gap-2 mt-2'>
                          <FaCheckCircle className='text-[#007569] text-xl' />
                          <p className='text-black font-semibold'>Completed</p>
                        </div>
                      )}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='flex items-center space-x-1'>
            <FaCalendarPlus />
            <p>Appointment</p>
          </div>
          <div className='flex items-center space-x-2'>
            <p>|</p>
            <button onClick={() => setDropDown(true)}><IoIosArrowUp className='text-2xl font-bold ' /></button>
          </div>
        </>
      )}
    </div>
  );
};

export default Appointment;
