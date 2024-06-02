import React from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";


const FeedbackModal = ({ doctors, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 w-96">
        <div className='flex justify-between'>
        <h2 className="text-xl font-bold mb-4">Add Your Feedback</h2>
        <button className="  text-xl  mb-5  bg-[#007569] text-white rounded-full h-[20px]"
            onClick={onClose}
          >
            <RxCrossCircled/>
          </button>
        </div>
        <div className="mb-4 border-[1px] border-[#BABABA] rounded-lg justify-between mx-auto p-1 items-center flex">
          <p className="font-semibold"> I recommend this doctor : </p>
          <div className="flex space-x-2 mt-2">
            <button className=" flex border-[1px] items-center  gap-1 border-[#BABABA]  "><FaThumbsUp /> YES</button>
            <button className=" flex border-[1px]  items-center gap-1 border-[#BABABA]"><FaThumbsDown/>NO</button>
          </div>
        </div>
        <div className="mb-4 border-[1px] border-[#BABABA] rounded-lg justify-between mx-auto p-1 items-center flex">
          <p className="font-semibold">Doctor Friendliness</p>
          <div className="flex  items-center space-x-2 mt-2">
            {[...Array(5)].map((_, index) => (
              <button key={index} className="text-yellow-500">★</button>
            ))}
          </div>
        </div>
        <div className="mb-4">
         
          <textarea  placeholder="Share your Feedback ...." className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
        </div>
        <div className="flex justify-end space-x-4">
          
          <button className="bg-[#007569] text-white px-4 py-2 rounded">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
