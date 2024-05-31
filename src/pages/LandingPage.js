// import React from 'react'
// import NavBar from '../components/NavBar'
// import Footer from '../components/Footer'
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { MdLocationOn } from "react-icons/md";

// import { BiMoney } from "react-icons/bi";
// import { MdOutlineAccessTimeFilled } from "react-icons/md";
// import ConcentricCircles from '../components/ConcentricCircles'
// import ConcentricCircles2 from '../components/ConcentricCircles2';

// function LandingPage() {
//   return (
//     <>
//       <NavBar />

//       <main className='lg:w-[85%] mt-10 mb-10 mx-auto '>
//         {/* main image  */}

//         <div className='flex   flex-row'>
//           <section className='w-[50%]  flex  flex-col justify-center '>
//             <div className='flex    pl-10 flex-col  md:text-4xl  text-2xl lg:text-6xl font-bold  text-start'>
//               <p>Search doctor,</p>
//               <p className='text-[#007569]'>Make an </p>
//               <p className='text-[#007569]'>Appointment</p>
//             </div>
//             <div className='flex gap-3  lg:mt-5  mt-2 mb-3 pl-10 text-white flex-col'>
//               <button className=' w-fit text-sm px-2  md:py-1 rounded-md bg-[#007569]'> Instant Appointment</button>

//               <button className=' w-fit  text-sm px-2 md:py-1 rounded-md bg-[#007569]'> 100% Expert Doctors </button>

//             </div>

//             <div className='lg:w-[55%] w-full'>
//               <p className='text-start text-xs pb-2 md:text-[18px] pl-10 text-gray-600'>
//                 Discover the best doctors, clinic's & hospital nearest to you.
//               </p>
//             </div>
//           </section>
//           <section className='w-[50%] flex  flex-col justify-center '>
//             <div>
//               <ConcentricCircles imageUrl="/doctor1.png" />
//             </div>
//           </section>
//         </div>
//         {/* main image and title ends */}


//         {/* search bar */}

//         <section className='flex flex-row  font-sans  gap-2 mt-10 bg-white shadow-lg shadow-[#00756926] py-3 px-4 mx-auto justify-between'>
//           <button className='flex justify-between border-2  w-full text-sm text-gray-700 rounded-md border-solid border-gray-400 px-2  md:mx-16 md:py-2 py-0.5'>Select a location <span className='text-xl  pl-2'><RiArrowDropDownLine /></span></button>
//           <button className='flex justify-between border-2  w-full text-sm text-gray-700 rounded-md border-solid border-gray-400 px-2  md:mx-16 md:py-2 py-0.5'>Select Doctors <span className='text-xl  pl-2'><RiArrowDropDownLine /></span></button>
//           <button className='bg-[#007569]   px-2 md:px-5 py-0.5 rounded-md text-sm text-white'>SEARCH</button>
//         </section>
//         {/* search bar ends */}

//         <div className=" text-white text-center bg-[#276A7B] rounded-full w-[90%]  lg:w-[50%] md:w-[80%] md:px-4 mx-auto py-2 mt-10 lg:text-3xl sm:text-[18px] text-xl">
//           Easy Steps To Book Your Appointment
//         </div>

//         <section className='flex flex-col mx-auto gap-20 md:gap-40 mt-20 md:flex-row font-mono items-center justify-between'>
//           {['Select the location and search near by doctors', 'Schedule and Book your date and time for appointment', 'Easy way to make payment in multiple Getways'].map((text, index) => (
//             <div key={index} className='relative flex md:w-[28%] w-[70%] flex-col'>
//               <div className='relative'>
//                 <div className='absolute left-1/2 transform -translate-x-1/2 -top-[72px] h-[100px] w-[100px] rounded-full bg-[#007569] z-0 flex items-center justify-center'>
//                   {index === 0 && <MdLocationOn className='text-white text-[50px]' />}
//                   {index === 1 && <MdOutlineAccessTimeFilled className='text-white text-[50px]' />}
//                   {index === 2 && <BiMoney className='text-white text-[50px]' />}
//                 </div>
//                 <div className='relative z-10 text-wrap pt-5  pb-4 text-center text-white mx-auto px-12 text-xl rounded-md bg-gradient-to-b from-50% from-[#007569] to-[#51E3D4]'>
//                   {text}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </section>
//         {/* steps div */}
//       </main>
//       <ConcentricCircles2 className="top-[1140px] relative left-[-290] " />
//       <Footer />
//     </>
//   )
// }

// export default LandingPage

import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { BiMoney } from "react-icons/bi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import ConcentricCircles from '../components/ConcentricCircles'
import ConcentricCircles2 from '../components/ConcentricCircles2'

function LandingPage() {
  return (
    <>
      <NavBar />
      <main className='relative lg:w-[85%] mt-10 mb-10 mx-auto '>
        {/* main image */}
        <div className='flex flex-row'>
          <section className='w-[50%] flex flex-col justify-center'>
            <div className='flex pl-10 flex-col md:text-4xl text-2xl lg:text-6xl font-bold text-start'>
              <p>Search doctor,</p>
              <p className='text-[#007569]'>Make an </p>
              <p className='text-[#007569]'>Appointment</p>
            </div>
            <div className='flex gap-3 lg:mt-5 mt-2 mb-3 pl-10 text-white flex-col'>
              <button className='w-fit text-sm px-2 md:py-1 rounded-md bg-[#007569]'> Instant Appointment</button>
              <button className='w-fit text-sm px-2 md:py-1 rounded-md bg-[#007569]'> 100% Expert Doctors </button>
            </div>
            <div className='lg:w-[55%] w-full'>
              <p className='text-start text-xs pb-2 md:text-[18px] pl-10 text-gray-600'>
                Discover the best doctors, clinic's & hospital nearest to you.
              </p>
            </div>
          </section>
          <section className='w-[50%] flex flex-col justify-center'>
            <div>
              <ConcentricCircles imageUrl="/doctor1.png" />
            </div>
          </section>
        </div>
        {/* main image and title ends */}
        {/* search bar */}
        <section className='flex flex-row font-sans gap-2 mt-10 bg-white shadow-lg shadow-[#00756926] py-3 px-4 mx-auto justify-between'>
          <button className='flex justify-between border-2 w-full text-sm text-gray-700 rounded-md border-solid border-gray-400 px-2 md:mx-16 md:py-2 py-0.5'>Select a location <span className='text-xl pl-2'><RiArrowDropDownLine /></span></button>
          <button className='flex justify-between border-2 w-full text-sm text-gray-700 rounded-md border-solid border-gray-400 px-2 md:mx-16 md:py-2 py-0.5'>Select Doctors <span className='text-xl pl-2'><RiArrowDropDownLine /></span></button>
          <button className='bg-[#007569] px-2 md:px-5 py-0.5 rounded-md text-sm text-white'>SEARCH</button>
        </section>
        {/* search bar ends */}
        <div className="text-white text-center bg-[#276A7B] rounded-full w-[90%] lg:w-[50%] md:w-[80%] md:px-4 mx-auto py-2 mt-10 lg:text-3xl sm:text-[18px] text-xl">
          Easy Steps To Book Your Appointment
        </div>
        <section className='flex flex-col mx-auto mb-10 gap-20 md:gap-40 mt-20 md:flex-row font-mono items-center justify-between'>
          {['Select the location and search near by doctors', 'Schedule and Book your date and time for appointment', 'Easy way to make payment in multiple Getways'].map((text, index) => (
            <div key={index} className='relative flex md:w-[28%] w-[70%] flex-col'>
              <div className='relative'>
                <div className='absolute left-1/2 transform -translate-x-1/2 -top-[72px] h-[100px] w-[100px] rounded-full bg-[#007569] z-0 flex items-center justify-center'>
                  {index === 0 && <MdLocationOn className='text-white text-[50px]' />}
                  {index === 1 && <MdOutlineAccessTimeFilled className='text-white text-[50px]' />}
                  {index === 2 && <BiMoney className='text-white text-[50px]' />}
                </div>
                <div className='relative z-10 text-wrap pt-5 pb-4 text-center text-white mx-auto px-12 text-xl rounded-md bg-gradient-to-b from-50% from-[#007569] to-[#51E3D4]'>
                  {text}
                </div>
              </div>
            </div>
          ))}
        </section>
        {/* steps div */}


        <div className='mt-10 flex flex-row justify-between'>
          <div className='md:w-[50%] '><img  className="w-full h-full  rounded-full bg-gradient-to-b from-50% from-white to-[#007569]" src='/doctor2.png' alt='doctor2'/></div>
          <div className='w-[50%] pl-6' >
            <h2 className='font-bold text-3xl text-[#007569]'>Experienced doctor analyse the patient giving them a proper treatment</h2>
          </div>
        </div>
       
      </main>





      <ConcentricCircles2 className="relative    z-[-1]" />



      <Footer className="absolute" />
    </>
  )
}

export default LandingPage

