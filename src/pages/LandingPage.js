
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { BiMoney } from "react-icons/bi";
import { RiToothLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { PiBrain } from "react-icons/pi";
import DoctorCard from '../components/DoctorCard';
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import ConcentricCircles from '../components/ConcentricCircles'
import ConcentricCircles2 from '../components/ConcentricCircles2'
import ConcentricCircle3 from '../components/ConcentricCircle3'

function LandingPage() {


  const doctors = [
    { name: "Dr. John Doe", image: "/doctor1.png", specialty: "Dentist", service: "MBBS" },
    { name: "Dr. Jane Smith", image: "/doctor4.png", specialty: "Dentist", service: "MBBS" },
    { name: "Dr. Alan Brown", image: "/doctor5.png", specialty: "Dentist", service: "MBBS" },
    { name: "Dr. Emma Wilson", image: "/doctor6.png", specialty: "Dentist", service: "MBBS" }
  ];
  return (
    <>
      <NavBar />
      <main className='relative  lg:w-[85%] mt-10 mb-10 mx-auto '>
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
        <div className=" mt-[80px] mb-5 text-white text-center bg-[#276A7B] rounded-full w-[90%] lg:w-[50%] md:w-[80%] md:px-4 mx-auto py-2  lg:text-3xl sm:text-[18px] text-xl">
          Easy Steps To Book Your Appointment
        </div>


        <section className='flex flex-col mx-auto mb-10 gap-20 lg:gap-40 mt-20 lg:flex-row font-mono items-center justify-between'>
          {['Select the location and search near by doctors', 'Schedule and Book your date and time for appointment', 'Easy way to make payment in multiple Getways'].map((text, index) => (
            <div key={index} className='relative flex lg:w-[28%] md:w-[50%] w-[70%] flex-col'>
              <div className='relative'>
                <div className='absolute left-1/2 transform -translate-x-1/2 -top-[72px] h-[100px] w-[100px] rounded-full bg-[#007569] z-0 flex items-center justify-center'>
                  {index === 0 && <MdLocationOn className='text-white text-[50px]' />}
                  {index === 1 && <MdOutlineAccessTimeFilled className='text-white text-[50px]' />}
                  {index === 2 && <BiMoney className='text-white text-[50px]' />}
                </div>
                <div className='relative z-10 text-wrap pt-5 pb-2 text-center text-white mx-auto px-12 text-xl rounded-md bg-gradient-to-b from-30% from-[#007569] to-[#51E3D4]'>
                  {text}
                  <div className='relative z-5 pt-2 pl-[110px] '>
                    {index === 0 && <MdLocationOn className='text-[#007569] rotate-45 text-[100px]' />}
                    {index === 1 && <MdOutlineAccessTimeFilled className='text-[#007569] rotate-45 text-[100px]' />}
                    {index === 2 && <BiMoney className='text-[#007569] rotate-45 text-[100px]' />}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </section>
        {/* steps div */}

        <div className='mt-[150px]  mb-[100px] flex flex-col md:flex-row gap-5 justify-between'>
          <div className='md:w-[50%]  px-16 mx-auto '>
            <img className="w-full h-full  rounded-full bg-gradient-to-b from-50% from-white to-[#007569]" src='/doctor2.png' alt='doctor2' /></div>
          <div className='md:w-[50%] px-10 md:px-0 pl-6' >
            <h2 className='font-bold text-3xl pt-10 pb-5 text-[#007569]'>Experienced doctor analyse the patient giving them a proper treatment</h2>
            <ul className='text-xl list-disc leading-10 marker:text-[#007569] pl-5'>
              <li>Doctor availability</li>
              <li>Treatement and Consulting</li>
              <li>Top Specialist doctor</li>
              <li>Apply Coupon for treatment</li>
            </ul>
            <div className='mt-3 mb-3'>
              <button className='w-fit text-lg mt- px-3 md:py-2 rounded-md bg-[#276A7B] text-white'>Book appointment</button>
            </div>
          </div>
        </div>



        {/* specialist field */}

        <section>
          <div className='font-bold w-[90%] mx-auto  md:w-full text-center text-xl md:text-3xl pt-10 pb-5 text-[#276A7B]'>
            Various specialist are here you to take care of your Health
            <p className='md:text-lg text-sm  mx-auto font-light  text-black'>
              Doctors are available at any time to care your health
            </p>
          </div>





          <div className='flex flex-col justify-center items-center mx-auto md:flex-row gap-10 md:gap-5 lg:gap-20'>
            <div className='relative'>
              <img className='rounded-lg h-[200px] w-[300px]' alt='dentist' src='/dentist1.jpg' />
              <div className='absolute inset-0 bg-[#007569] opacity-50 rounded-lg'></div>
              <div className='absolute inset-0 flex flex-col justify-center items-center'>
                <p className='text-white text-2xl font-bold'>Dentist</p>
              </div>
              <RiToothLine className='absolute bottom-2 right-2 text-3xl text-[#007569] bg-white rounded-md' />
            </div>
            <div className='relative'>
              <img className='rounded-lg h-[200px] w-[300px]' alt='eye specialist' src='/eyespecialist1.jpg' />
              <div className='absolute inset-0 bg-[#007569] opacity-50 rounded-lg'></div>
              <div className='absolute inset-0 flex flex-col justify-center items-center'>
                <p className='text-white text-2xl font-bold'>Eye Specialist</p>
              </div>
              <FaRegEye className='absolute bottom-2 right-2 text-3xl  text-[#007569] p-1 bg-white rounded-md' />
            </div>
            <div className='relative'>
              <img className='rounded-lg h-[200px] w-[300px]' alt='neurology' src='/neurologypic1.jpg' />
              <div className='absolute inset-0 bg-[#007569] opacity-50 rounded-lg'></div>
              <div className='absolute inset-0 flex flex-col justify-center items-center'>
                <p className='text-white text-2xl font-bold'>Neurology</p>
              </div>
              <PiBrain className='absolute bottom-2 right-2 text-3xl text-[#007569] bg-white rounded-md' />
            </div>
          </div>
        </section>



        <section>
          <div className='font-bold w-[90%] mx-auto  md:w-full text-center text-xl md:text-3xl pt-10 pb-5 text-[#276A7B]'>
            Our Top Rated Doctors
            <p className='md:text-lg mx-auto text-sm  font-light  text-black'>
              Top Rated Doctors are available at any time to care your health
            </p>
          </div>


          <div>
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                {doctors.map((doctor, index) => (
                  <DoctorCard key={index} doctor={doctor} />
                ))}
              </div>
            </div>
          </div>

        </section>

      </main>





      <ConcentricCircles2 className="relative    z-[-1]" />

      {/* <ConcentricCircle3 className="relative  z-[-1]" /> */}

      <Footer className="absolute" />
    </>
  )
}

export default LandingPage