import React from 'react'
import doctors from "../constant/doctorarray"
import { MdOutlineVerified } from "react-icons/md"
import { FaRegHeart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidShoppingBag } from "react-icons/bi";
import { IoIosCalendar } from "react-icons/io";
import { IoClipboardOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import FeedbackModal from './FeedbackPopUp';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function AboutDoctor() {
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    const openFeedbackModal = (doctor) => {
        setSelectedDoctor(doctor);
        setShowFeedbackModal(true);
    };

    const closeFeedbackModal = () => {
        setShowFeedbackModal(false);
        setSelectedDoctor(null);
    };
    return (
        <>
            <section className='flex md:flex-row flex-col w-[80%] p-4 rounded-lg border-[1px] border-[#BABABA] mx-auto justify-between'>
                <div className='md:w-[25%]  mx-auto bg-white'>
                    <img className='h-[220px] w-[220px]  rounded-md overflow-hidden  bg-[#017A884D]' src={doctors[0].image} alt='doctor' />
                </div>

                <div className='md:w-[20%] mx-auto  py-3 justify-between flex flex-col bg-white'>
                    <div className='text-2xl text-gray-600 font-bold'>{doctors[0].name}</div>
                    <div className='text-lg text-green-700'><MdOutlineVerified /></div>
                    <div >{doctors[0].service}</div>
                    <div className="text-[#007569]  text-sm font-bold">{doctors[0].specialty}</div>
                    <p className="text-yellow-500 text-xl ">★★★★★</p>
                    <div className=' flex gap-2 '>
                        <FaRegHeart className='border-[0.5px] border-gray-600 rounded-sm p-1 text-xl' /><span> Add to favourites</span>
                    </div>
                </div>



                <div className='md:w-[30%] mx-auto flex flex-col pb-4 justify-between bg-white'>
                    <div className='flex gap-3 mx-auto flex-col'>
                        <div className='flex gap-2'>
                            <FaUserAlt className='border-[0.5px]  text-[#A300EF] border-[#00000040] rounded-sm p-1 text-2xl ' />
                            <span className='text-xl  text-gray-700'>3 Patients Treated</span>
                        </div>
                        <div className='flex gap-2 '>
                            <BiSolidShoppingBag className='border-[0.5px]  text-[#00A31A] border-[#00000040] rounded-sm  text-2xl ' />
                            <span className='text-xl  text-gray-700'>12+ Years Of experiance</span>
                        </div>
                    </div>
                    <div className='flex'>
                        <button className="flex flex-col p-1 py-2 border-[1px] bg-[#F6F6F6]  rounded-l-lg border-[#BABABA]"> Clinic
                            <p className=' px-3'>Your clinic name</p>
                        </button>
                        <button className="flex flex-col p-1 py-2 border-[1px] bg-[#F6F6F6]  rounded-r-lg border-[#BABABA]">Location
                            <p className=' px-3'> 213 Old Trafford UK</p>
                        </button>
                    </div>
                </div>

                <div className='md:w-[25%] mx-auto flex  justify-between flex-col bg-white'>
                    <div className='flex gap-2'> <IoIosCalendar className='mt-1 text-gray-700' /> Mon, Wed, Thu, Fri, Sat</div>
                    <div className='flex gap-2'> <GrLocation className='mt-1 font-bold text-gray-700' />3 Feedbacks</div>
                    <div className='flex gap-2 text-[#007569]'> <IoClipboardOutline className='mt-1 font-bold text-gray-700' />Available Now</div>
                    <div className='flex gap-2'> <GrLocation className='mt-1 font-bold text-gray-700' />America</div>
                    <div className='w-[80%] gap-1 mb-3 font-bold flex flex-row'>
                        <button
                            className="border-[2px] border-[#276A7B] rounded-lg p-1 text-[#276a7b] w-[140px]"
                            onClick={() => openFeedbackModal(doctors)}
                        >
                            Add Feedback
                        </button>
                        <button className='border-[2px] border-[#276A7B] rounded-lg p-1 bg-[#276a7b] text-white  w-[140px] '>
                            <Link to="/appointment">
                            Book Appointment
                            </Link>
                            </button>
                    </div>
                </div>
                {showFeedbackModal && (
                    <FeedbackModal doctors={selectedDoctor} onClose={closeFeedbackModal} />
                )}
            </section>
        </>
    )
}

export default AboutDoctor