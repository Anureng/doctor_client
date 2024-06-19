import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

function NavBar() {
  const [open, setOpen] = useState(false);
  const getdata = localStorage.getItem("token");

  return (
    <div className={`p-4 ${open ? 'bg-white' : 'bg-transparent'}`}>
      <div className={`rounded-full flex flex-col md:flex-row items-center justify-between p-4 ${open ? 'bg-white text-black' : 'bg-[#007569] text-white'}`}>


      <div className={`flex space-x-8 ${open ? "bg-[#007569] w-full p-2 rounded-lg text-white" :""}`}>
        <div className='font-bold lg:text-2xl'>
          <Link to="/" className={open ? 'text-white ' : 'text-white '}>Doctor +</Link>
        </div>

        <div className='lg:hidden' onClick={() => setOpen(!open)}>
          {open ? <RxCross1 className='text-2xl' /> : <RxHamburgerMenu className='text-2xl' />}
        </div>
      </div>

        <div className={`lg:flex space-x-8   ${open ? 'flex ' : 'hidden'} flex-col lg:flex-row items-center w-full lg:w-auto`}>
          <div className={`flex items-center space-x-1 rounded-lg w-full lg:w-96 p-2 mt-4 lg:mt-0 ${open ? 'bg-[#007569] text-white' : 'bg-white'}`}>
            <CiSearch className={open ? 'text-white' : 'text-black'} />
            <input placeholder='Search Doctor' className={`focus:outline-none w-96 ${open ? 'text-white placeholder-white' : 'text-black placeholder-black'}`} />
          </div>

          <div className='list-none  w-full   flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-3 mt-4 lg:mt-0'>
            <Link to="/" className=' '><li className={`cursor-pointer  flex items-center justify-center ${open ? 'bg-[#007569]  text-white p-2 rounded-md' : ''}`}>Home</li></Link>
            <Link to="/"><li className={`cursor-pointer  flex items-center justify-center ${open ? 'bg-[#007569]  text-white p-2 rounded-md' : ''}`}>Service</li></Link>
            <Link to="/doctors"><li className={`cursor-pointer  flex items-center justify-center ${open ? 'bg-[#007569]  text-white p-2 rounded-md' : ''}`}>Doctors</li></Link>
            <Link to="/about"><li className={`cursor-pointer  flex items-center justify-center ${open ? 'bg-[#007569] text-white p-2 rounded-md' : ''}`}>About Us <IoIosArrowDown className='text-xl' /></li></Link>
          </div>

          {getdata ? (
            <Link to="/profile" className={`mt-4 lg:mt-0 ${open ? 'bg-[#007569] w-full flex items-center justify-center text-white p-2 rounded-md' : ''}`}>
              <FaUser className='text-2xl cursor-pointer' />
            </Link>
          ) : (
            <Link to="/login" className='mt-4 lg:mt-0'>
              <div className={` px-1 py-2 w-32 rounded-lg cursor-pointer ${open ? 'bg-[#007569] text-white' : 'bg-white text-black'}`}>
                Login / Signup
              </div>
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}

export default NavBar;
