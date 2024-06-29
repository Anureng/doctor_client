import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { IoIosCalendar } from "react-icons/io";
import { IoClipboardOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getdata = localStorage.getItem("token");

  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await fetch("https://doctors-backend-ztcl.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: "doctor" }),
      });
      const data = await response.json();

      setDoctors(data.filter(el => el.type === "doctor"));

    };

    fetchDoctors();
  }, []);

  const filteredDoctors = doctors.filter(doctor =>
    doctor.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.services.specialities.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <>
      <div className={`p-4 ${open ? 'bg-white' : 'bg-transparent'}`}>
        <div className={`flex flex-col lg:rounded-full lg:flex-row items-center bg-[#007569] justify-between p-4 ${open ? 'rounded-xl' : 'bg-[#007569] rounded-[20px] text-white'}`}>
          <div className={`flex justify-between ${open ? "bg-[#007569]  w-full p-2 rounded-lg text-white" : ""}`}>
            <div className='font-bold text-2xl'>
              <Link to="/" className="  text-white">Doctor +</Link>
            </div>
            <div className='lg:hidden' onClick={() => setOpen(!open)}>
              {open ? <RxCross1 className='text-2xl' /> : <RxHamburgerMenu className='text-2xl py-auto' />}
            </div>
          </div>
          <div className={`lg:flex  space-x-8 ${open ? 'flex ' : 'hidden'} flex-col lg:flex-row items-center w-full lg:w-auto`}>
            <div className={`relative  mx-auto flex items-center space-x-1 rounded-lg w-full lg:w-96 p-2 mt-4 lg:mt-0 ${open ? 'bg-[#007569]  text-white' : 'bg-white'}`}>
              <CiSearch className={`${open ? 'text-white font-[900]' : 'text-black'}`} />
              <input
                placeholder='Search Doctor'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`focus:outline-none py-1 ${open ? 'w-80 pl-2  md:w-full rounded-md text-black placeholder-black' : ' w-96 text-black placeholder-black'}`}
              />
              {searchQuery && (
                <RxCross1
                  className={` cursor-pointer ${open ? 'text-white' : 'text-black'}`}
                  onClick={clearSearch}
                />
              )}
            </div>
            <div className='list-none justify-center w-full flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-3 mt-4 lg:mt-0'>
              <Link to="/" className=''><li className={`cursor-pointer flex items-center justify-center ${open ? 'bg-[#007569]  border-b border-white text-white p-2 rounded-md' : ''}`}>Home</li></Link>

              <Link to="/doctors"><li className={`cursor-pointer flex items-center justify-center ${open ? 'bg-[#007569] border-b border-white text-white p-2 rounded-md' : ''}`}>Doctors</li></Link>

            </div>
            {getdata ? (
              <Link to="/profile" className={`mt-4 lg:mt-0 ${open ? 'bg-[#007569] border text-center border-white rounded-full flex  items-center justify-center text-white p-2 ' : ''}`}>
                <FaUser className='text-2xl cursor-pointer' />
              </Link>
            ) : (
              <Link to="/login" className='mt-4 lg:mt-0'>
                <div className={`px-1 py-2 w-32 border text-center border-white rounded-lg cursor-pointer ${open ? 'bg-[#007569] text-white' : 'bg-white text-black'}`}>
                  Login / Signup
                </div>
              </Link>
            )}
          </div>

        </div>
      </div>

      {searchQuery && (
        <div className='bg-white text-black w-full mt-2 rounded-md shadow-lg p-4'>
          {filteredDoctors.length > 0 ? (
            <ul>
              {filteredDoctors.map((doctor) => (
                <li key={doctor.id} className='p-2 mx-auto lg:w-[70%]  md:w-[80%] w-[90%] mb-2 border-b last:border-b-0'>
                  <div className=' border-2 border-gray-400  justify-between rounded-md flex flex-row p-2 gap-3'>
                    <div className='flex flex-row'> <img className='h-[130px] w-[130px]  rounded-md overflow-hidden items-center py-auto bg-[#017A884D]' src={doctor?.profilepic} alt='doctor' />
                      <div className='flex flex-col justify-between p-2'>
                        <p className=' text-xl  flex text-gray-600 font-bold'> {doctor.firstname} {doctor.lastname}  <span className='text-lg text-green-700 pl-3'><MdOutlineVerified /></span></p>
                        <div className="text-[#007569]  text-sm font-bold">{doctor?.services?.specialities}</div>
                        <p className="text-yellow-500 text-xl ">★★★★★</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2 '>
                      {/* <div className='flex gap-2'> <IoIosCalendar className='mt-1 text-gray-700' />
                        <p className='flex space-x-1'>{doctor?.availability.days.map((el) => (
                          <p>{el}</p>
                        ))}</p>
                      </div> */}
                      <div className='flex gap-2 text-[#007569]'> <IoClipboardOutline className='mt-1 font-bold text-gray-700' />Available Now

                      </div>
                      <div className='flex gap-2'> <GrLocation className='mt-1 font-bold text-gray-700' />{doctor?.location}</div>
                      <Link to={`/doctors/profile/${doctor._id}`}>
                        <button className='border border-[#007569] text-sm md:text-md text-[#007569] px-1  py-1 rounded-md'>View Profile</button>
                      </Link>
                    </div>
                  </div>
                </li>

              ))}
            </ul>
          ) : (
            <p>No doctors found</p>
          )}
        </div>
      )}
    </>
  );
}

export default NavBar;