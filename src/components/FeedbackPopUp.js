import React, { useState } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const FeedbackModal = ({ doctor, onClose, onSubmit }) => {
  const [recommend, setRecommend] = useState(null);
  const [friendliness, setFriendliness] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");

  const handleSubmit = () => {
    const feedback = {
      doctorId: doctor.id,
      recommend,
      friendliness,
      feedbackText,
    };
    onSubmit(feedback);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 w-96">
        <div className='flex justify-between'>
          <h2 className="text-xl font-bold mb-4">Add Your Feedback</h2>
          <button className="text-xl mb-5 bg-[#007569] text-white rounded-full h-[20px]" onClick={onClose}>
            <RxCrossCircled />
          </button>
        </div>
        <div className="mb-4 border-[1px] border-[#BABABA] rounded-lg justify-between mx-auto p-1 items-center flex">
          <p className="font-semibold">I recommend this doctor:</p>
          <div className="flex space-x-2 mt-2">
            <button
              className={`flex border-[1px] items-center gap-1 border-[#BABABA] ${recommend === true ? 'bg-green-500' : ''}`}
              onClick={() => setRecommend(true)}
            >
              <FaThumbsUp /> YES
            </button>
            <button
              className={`flex border-[1px] items-center gap-1 border-[#BABABA] ${recommend === false ? 'bg-red-500' : ''}`}
              onClick={() => setRecommend(false)}
            >
              <FaThumbsDown /> NO
            </button>
          </div>
        </div>
        <div className="mb-4 border-[1px] border-[#BABABA] rounded-lg justify-between mx-auto p-1 items-center flex">
          <p className="font-semibold">Doctor Friendliness</p>
          <div className="flex items-center space-x-2 mt-2">
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                className={`text-gray-500 ${friendliness > index ? 'text-yellow-500' : ''}`}
                onClick={() => setFriendliness(index + 1)}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Share your Feedback ...."
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-end space-x-4">
          <button onClick={handleSubmit} className="bg-[#007569] text-white px-4 py-2 rounded">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
