import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
      <img className="w-[200px] bg-[#276A7B4D] h-[220px] overflow-hidden object-cover" src={doctor.image} alt={doctor.name} />
      <div className="flex-1 p-4">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-xl text-gray-600 font-semibold">{doctor.name}</h2>
            <p className="text-gray-600">{doctor.service}</p>
            <p className="text-[#007569]  text-sm font-bold">{doctor.specialty}</p>
            <p className="text-yellow-500">★★★★★</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-white text-[#007569]  border-2 border-[#007569]  px-4 py-2 rounded">View Profile</button>
            <button className="bg-[#007569]  text-white px-4 py-2 rounded">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
