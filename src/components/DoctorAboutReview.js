
import React, { useState } from 'react';
import { FaUserLarge } from "react-icons/fa6";
import doctors from "../constant/doctorarray"

function DoctorAboutReview() {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <div className='mt-5'>
            <div className="w-[80%] p-4 rounded-lg border-[1px] border-[#BABABA] mx-auto justify-between'">
                <div className='flex flex-row justify-between mx-auto w-[80%] text-4xl '>
                    <button
                        className={`px-4 w-full py-2 font-semibold ${activeTab === 'about' ? 'text-[#007569]  border-b-2 border-[#007569]' : 'text-gray-500  border-b-2 border-[#BABABA]'}`}
                        onClick={() => setActiveTab('about')}
                    >
                        About
                    </button>
                    <button
                        className={`px-4 w-full py-2 font-semibold ${activeTab === 'review' ? 'text-[#007569]  border-b-2 border-[#007569]' : 'text-gray-500  border-b-2 border-[#BABABA]'}`}
                        onClick={() => setActiveTab('review')}
                    >
                        Review
                    </button>
                </div>

                <div className="mt-4">
                    {activeTab === 'about' && (
                        <div className="p-4  rounded-lg">
                            <h2 className="text-xl  pb-10 font-bold">About {doctors[0].name}</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    )}
                    {activeTab === 'review' && (
                        <div className="p-4  rounded-lg">
                            <h2 className="text-xl  pb-10  font-bold">Review</h2>
                            <p>This is the Review section.</p>
                        </div>
                    )}
                </div>



            </div>


        </div>

    )
}

export default DoctorAboutReview