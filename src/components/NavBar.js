import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

function NavBar() {
  const [open, setOpen] = useState(false)
  const getdata = localStorage.getItem("token")
  return (
    <div className='text-white p-4'>
      <div className='bg-[#007569] rounded-full flex flex-col md:flex-row items-center justify-between p-4'>

        <div className='font-bold lg:text-2xl'>
          Doctor +
        </div>

        <div>
          <RxHamburgerMenu onClick={() => setOpen(!open)} className='block lg:hidden' />
        </div>
        {
          open ? (<>
            <div className=' flex-col   items-center space-y-4  md:space-x-10 mt-4 '>
              <div className='list-none flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3 mt-4 md:mt-0'>
                <Link to="/"> <li className='cursor-pointer'>Home</li></Link>
                <Link to=""><li className='cursor-pointer'>Service</li></Link>
                <Link to="/doctors" ><li className='cursor-pointer'>Doctors</li></Link>
                <Link to="/about"><li className='flex items-center cursor-pointer'>About Us <IoIosArrowDown className='text-xl' /></li></Link>
              </div>
             <Link to="/login"> <div className='bg-white text-black px-4 py-2 rounded-lg cursor-pointer'>
                Login / Signup
              </div></Link>
              <RxCross1 className='block lg:hidden' />
            </div>
          </>) : (<>

          </>)
        }

        <div className=' flex-col hidden lg:flex md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10 mt-4 md:mt-0'>
          <div className='flex items-center bg-white space-x-1 rounded-lg w-full md:w-96 p-2'>
            <CiSearch className='text-black' />
            <input placeholder='Search Doctor' className='focus:outline-none text-black w-full' />
          </div>
          <div className='list-none flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3 mt-4 md:mt-0'>
            <Link to="/"> <li className='cursor-pointer'>Home</li></Link>
            <Link to=""><li className='cursor-pointer'>Service</li></Link>
            <Link to="/doctors" ><li className='cursor-pointer'>Doctors</li></Link>
            <Link to="/about"><li className='flex items-center cursor-pointer'>About Us <IoIosArrowDown className='text-xl' /></li></Link>
          </div>
          {
            getdata ? (<FaUser/>) : (<>
               <Link to="/login"><div className='bg-white text-black px-4 py-2 rounded-lg cursor-pointer'>
            Login / Signup
          </div>
          </Link> 
            </>)
          }
        </div>

      </div>
    </div>
  );
}

export default NavBar;
