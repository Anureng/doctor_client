import React, { useState } from 'react';
import { FaCalendarPlus } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa6';
import { IoIosArrowUp } from 'react-icons/io';

const Appointment = () => {
  const [dropDown, setDropDown] = useState(false);
  const [currentView, setCurrentView] = useState('upcoming');

  const upcoming = [
    { id: 1, name: "guf", degree: "Dentist", clinicName: "kugif", time: "11:45 pm", Date: "02 Jan" , upcoming : true},
    { id: 2, name: "guf", degree: "Dentist", clinicName: "kugif", time: "11:45 pm", Date: "02 Jan" , upcoming : true},
  ];

  const completed = [
    { id: 1, name: "guf", degree: "anurag", clinicName: "kugif", time: "11:45 pm", Date: "02 Jan" , completed:true },
    { id: 2, name: "guf", degree: "Dentist", clinicName: "kugif", time: "11:45 pm", Date: "02 Jan" ,completed:true},
  ];

  const canceled = [
    { id: 1, name: "guf", degree: "Kok", clinicName: "kugif", time: "11:45 pm", Date: "02 Jan",canceled : true },
    { id: 2, name: "guf", degree: "Dentist", clinicName: "kugif", time: "11:45 pm", Date: "02 Jan",canceled : true },
  ];

  const appointments = { upcoming, completed, canceled };

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
                <button onClick={() => setDropDown(false)}><FaChevronDown className='text-2xl font-bold '/></button>
              </div>
            </div>
            <div>
              <div className='flex justify-evenly my-2'>
                <button className='border px-2 py-1 border-[#276A7B] rounded-lg' onClick={() => setCurrentView('upcoming')}>Upcoming</button>
                <button className='border px-2 py-1 border-[#276A7B] rounded-lg' onClick={() => setCurrentView('canceled')}>Canceled</button>
                <button className='border px-2 py-1 border-[#276A7B] rounded-lg' onClick={() => setCurrentView('completed')}>Completed</button>
              </div>
              {appointments[currentView].map((el) => (
                <div key={el.id} className='flex p-3'>
                  <div>
                    <img src='/login.png' className='w-24 h-24' alt='Doctor' />
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <div>
                      <div className='space-y-2'>
                        <p>{el.name}</p>
                        <p>{el.degree}</p>
                        <p>{el.clinicName}</p>
                        <p>⭐⭐⭐⭐⭐</p>
                      </div>
                    </div>
                    <div className='space-x-3'>
                    {el.upcoming && <p>Upcoming</p>}
                    {el.canceled && <p className='text-red-400 foont-bold'>Canceled</p>}
                    {el.completed && <p className='text-green-400 foont-bold'>Completed</p>}
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
            <button onClick={() => setDropDown(true)}><IoIosArrowUp className='text-2xl font-bold '/></button>
          </div>
        </>
      )}
    </div>
  );
};

export default Appointment;
