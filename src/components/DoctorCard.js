import React from 'react';
import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  console.log(doctor);
  return (
    <div className="bg-white rounded-lg  shadow-gray-600 shadow-md border-2 border-gray-400 overflow-hidden flex">
      <img className="w-[200px] bg-[#276A7B4D] h-[220px] overflow-hidden object-cover" src={doctor.profilepic} alt={doctor.firstname} />
      <div className="flex-1 p-4">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-xl text-gray-600 font-semibold">{doctor.firstname}</h2>
            <p className="text-gray-600">{doctor.services.specialities}</p>
            <p className="text-[#007569]  text-sm font-bold">{doctor?.services?.specialities}</p>
            <p className="text-yellow-500">★★★★★</p>
          </div>
          <div className="flex  flex-col md:flex-row gap-2 bspace-x-2">
            <button className="bg-white text-[#007569]  border-2 border-[#007569]  px-4 py-2 rounded">
            <Link to={`/doctors/profile/${doctor._id}`}>
              View Profile
              </Link>
              </button>
            <button className="bg-[#007569]  text-white px-4 py-2 rounded">
            <Link to={`/appointment/${doctor._id}`}>
              Book Appointment
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
