import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

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
        <div className={`flex flex-col lg:rounded-full md:flex-row items-center bg-[#007569] justify-between p-4 ${open ? 'rounded-xl' : 'bg-[#007569] rounded-[20px] text-white'}`}>
          <div className={`flex justify-between ${open ? "bg-[#007569] w-full p-2 rounded-lg text-white" : ""}`}>
            <div className='font-bold lg:text-2xl'>
              <Link to="/" className="text-white">Doctor +</Link>
            </div>
            <div className='lg:hidden' onClick={() => setOpen(!open)}>
              {open ? <RxCross1 className='text-2xl' /> : <RxHamburgerMenu className='text-2xl' />}
            </div>
          </div>
          <div className={`lg:flex space-x-8 ${open ? 'flex ' : 'hidden'} flex-col lg:flex-row items-center w-full lg:w-auto`}>
            <div className={`relative flex items-center space-x-1 rounded-lg w-full lg:w-96 p-2 mt-4 lg:mt-0 ${open ? 'bg-[#007569] text-white' : 'bg-white'}`}>
              <CiSearch className={`${open ? 'text-white font-bold' : 'text-black'}`} />
              <input
                placeholder='Search Doctor'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`focus:outline-none py-2  ${open ? 'w-80 pl-2 rounded-md text-black placeholder-black' : ' w-96 text-black placeholder-black'}`}
              />
               {searchQuery && (
                <RxCross1
                  className={` cursor-pointer ${open ? 'text-white' : 'text-black'}`}
                  onClick={clearSearch}
                />
              )}
            </div>
            <div className='list-none w-full flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-3 mt-4 lg:mt-0'>
              <Link to="/" className=''><li className={`cursor-pointer flex items-center justify-center ${open ? 'bg-[#007569] text-white p-2 rounded-md' : ''}`}>Home</li></Link>

              <Link to="/doctors"><li className={`cursor-pointer flex items-center justify-center ${open ? 'bg-[#007569] text-white p-2 rounded-md' : ''}`}>Doctors</li></Link>

            </div>
            {getdata ? (
              <Link to="/profile" className={`mt-4 lg:mt-0 ${open ? 'bg-[#007569] w-full flex items-center justify-center text-white p-2 rounded-md' : ''}`}>
                <FaUser className='text-2xl cursor-pointer' />
              </Link>
            ) : (
              <Link to="/login" className='mt-4 lg:mt-0'>
                <div className={`px-1 py-2 w-32 rounded-lg cursor-pointer ${open ? 'bg-[#007569] text-white' : 'bg-white text-black'}`}>
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
                <li key={doctor.id} className='p-2 mx-auto w-[90%]  mb-2 border-b last:border-b-0'>
                  <div className=' border border-gray-700 flex flex-row p-2 gap-3'>
                  <img className='h-[120px] w-[120px]  rounded-md overflow-hidden  bg-[#017A884D]' src={doctor?.profilepic} alt='doctor' />
                  <p className=' text-xl  text-gray-600 font-bold'> {doctor.firstname} {doctor.lastname}</p>
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