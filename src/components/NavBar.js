import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
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
      
      setDoctors(data);
    };

    fetchDoctors();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    if (value) {
      const filtered = doctors.filter((doctor) =>
        doctor.name && doctor.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors([]);
    }
  };

  return (

    <>

      <div className={`p-4 ${open ? 'bg-white' : 'bg-transparent'}`}>
        <div className={`rounded-full flex flex-col md:flex-row items-center justify-between p-4 ${open ? 'bg-white text-black' : 'bg-[#007569] text-white'}`}>

          <div className={`flex justify-between ${open ? "bg-[#007569] w-full p-2 rounded-lg text-white" : ""}`}>
            <div className='font-bold lg:text-2xl'>
              <Link to="/" className={open ? 'text-white ' : 'text-white '}>Doctor +</Link>
            </div>

            <div className='lg:hidden' onClick={() => setOpen(!open)}>
              {open ? <RxCross1 className='text-2xl' /> : <RxHamburgerMenu className='text-2xl' />}
            </div>
          </div>

        <div className={`lg:flex space-x-8 ${open ? 'flex ' : 'hidden'} flex-col lg:flex-row items-center w-full lg:w-auto`}>
          <div className={`relative flex items-center space-x-1 rounded-lg w-full lg:w-96 p-2 mt-4 lg:mt-0 ${open ? 'bg-[#007569] text-white' : 'bg-white'}`}>
            <CiSearch className={open ? 'text-white' : 'text-black'} />
            <input
              placeholder='Search Doctor'
              className={`focus:outline-none w-96 ${open ? 'text-white placeholder-white' : 'text-black placeholder-black'}`}
              value={searchInput}
              onChange={handleSearchChange}
            />
            {searchInput && filteredDoctors.length > 0 && (
              <div className='absolute top-full left-0 right-0 bg-white text-black shadow-lg rounded-lg mt-1 z-50'>
                {filteredDoctors.map((doctor) => (
                  <Link to={`/doctor/${doctor._id}`} key={doctor._id} className='block p-2 hover:bg-gray-200'>
                    {doctor.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className='list-none w-full flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-3 mt-4 lg:mt-0'>
            <Link to="/" className=''><li className={`cursor-pointer flex items-center justify-center ${open ? 'bg-[#007569] text-white p-2 rounded-md' : ''}`}>Home</li></Link>
            <Link to="/"><li className={`cursor-pointer flex items-center justify-center ${open ? 'bg-[#007569] text-white p-2 rounded-md' : ''}`}>Service</li></Link>
            <Link to="/doctors"><li className={`cursor-pointer flex items-center justify-center ${open ? 'bg-[#007569] text-white p-2 rounded-md' : ''}`}>Doctors</li></Link>
            <Link to="/about"><li className={`cursor-pointer flex items-center justify-center ${open ? 'bg-[#007569] text-white p-2 rounded-md' : ''}`}>About Us <IoIosArrowDown className='text-xl' /></li></Link>
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
      
    </>
  );
}

export default NavBar;









