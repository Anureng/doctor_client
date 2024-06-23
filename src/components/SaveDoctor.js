// import React, { useState } from 'react';
// import { FaCalendarPlus, FaChevronDown } from "react-icons/fa6";
// import { IoIosArrowUp } from "react-icons/io";
// import { useSavedDoctors } from '../SavedDoctorsContext';

// const SaveDoctor = () => {
//   const { savedDoctors } = useSavedDoctors();
//   const [dropDown, setDropDown] = useState(false);

//   return (
//     <div className={`flex p-3 justify-between transition-all duration-300 ${dropDown ? 'bg-white text-black h-fit border border-[#276A7B] p-0 items-start' : 'bg-[#276A7B] text-white h-fit'}`}>
//       {
//         dropDown ? (
//           <>
//             <div className='w-full'>
//               <div className='border border-[#276A7B] flex w-full justify-between items-center p-3'>
//                 <div className='flex items-center space-x-1'>
//                   <FaCalendarPlus />
//                   <p>Saved Doctors</p>
//                 </div>
//                 <div className='flex items-center space-x-2'>
//                   <p>|</p>
//                   <button onClick={() => setDropDown(false)}><FaChevronDown className='text-2xl font-bold ' /></button>
//                 </div>
//               </div>

//               <div className='h-[260px] overflow-y-scroll'>
//                 {savedDoctors.map((el, index) => (

//                   <div key={index} className='flex border rounded-md border-gray-600 mb-2 mt-2 p-3'>
//                     <div>
//                       <img src={el.image} className='w-40 h-40' alt={el.name} />
//                     </div>
//                     <div className='flex items-center justify-between w-full'>
//                       <div className='space-y-2 '>
//                         <p className=' text-xl  text-gray-600 font-bold'>{el.name}</p>
//                         <p className='text-[#007569]  text-sm font-semibold'>{el.degree}</p>
//                         <p>{el.clinicName}</p>
//                         <p>⭐⭐⭐⭐⭐</p>
//                       </div>
//                       <div className='space-x-3'>
//                         <button className='border border-[#276A7B] rounded-lg px-2 py-1'>View Profile</button>
//                         <button className='bg-[#276A7B] text-white px-2 py-1 rounded-lg'>Book Now</button>
//                       </div>
//                     </div>
//                   </div>

//                 ))
//                 }
//               </div>

//             </div>

//           </>
//         ) : (
//           <>
//             <div className='flex items-center space-x-1'>
//               <FaCalendarPlus />
//               <p>Saved Doctors</p>
//             </div>
//             <div className='flex items-center space-x-2'>
//               <p>|</p>
//               <button onClick={() => setDropDown(true)}><IoIosArrowUp className='text-2xl font-bold ' /></button>
//             </div>
//           </>
//         )
//       }
//     </div>
//   );
// };

// export default SaveDoctor;









import React, { useState } from 'react';
import { FaCalendarPlus, FaChevronDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { useSavedDoctors } from '../SavedDoctorsContext';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SaveDoctor = () => {
  const { savedDoctors, removeSavedDoctor, isDoctorSaved } = useSavedDoctors();
  const [dropDown, setDropDown] = useState(false);

  const toggleSaveDoctor = (doctor) => {
    if (isDoctorSaved(doctor.id)) {
      removeSavedDoctor(doctor.id);
    } else {
      savedDoctors(doctor);
    }
  };
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
                      <img src={el.image} className='w-40 h-40' alt={el.name} />
                    </div>
                    <div className='flex items-center justify-between w-full'>
                      <div className='space-y-2 '>
                        <p className=' text-xl  text-gray-600 font-bold'>{el.name}</p>
                        <p className='text-[#007569]  text-sm font-semibold'>{el.degree}</p>
                        <p>{el.clinicName}</p>
                        <p>⭐⭐⭐⭐⭐</p>
                      </div>
                      <div className='space-x-3'>
                        <div onClick={() => toggleSaveDoctor(el)} className='flex gap-2 pb-[80px] pl-[120px] cursor-pointer'>
                          <span>{isDoctorSaved(el.id) ? <FaHeart className='text-[#007569]  text-xl' /> : <FaHeart className='text-gray-500 text-xl ' />}
                          </span>
                        </div>
                        <Link to={`/doctors/profile/${el.id}`}>
                          <button className='border border-[#007569] text-sm md:text-md text-[#007569] px-1  py-1 rounded-md'>View Profile</button>
                        </Link>
                        <button className='bg-[#276A7B] text-white px-2 py-1 rounded-lg'>Book Now</button>
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
