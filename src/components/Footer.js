import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <div>
      <div className=' p-5 flex text-white bg-[#007569]  items-center justify-center'>
        <div className='flex flex-col md:flex-row  space-x-10 '>
          <div className='  flex items-center justify-center md:justify-start md:items-start text-3xl font-bold '>
            Doctor +
          </div>
          <div className='w-fit  '>
            Thank you for visiting my website, and  I look forward
            to being a part of <br /> your wellness journey. Let's thrive
            together!</div>
          <div>
            <div className=' w-fit flex items-center space-x-3'><FaPhone />
              <p>
                +91-1234567890
              </p>
            </div>
            <div className=' w-fit flex items-center space-x-3'> <CiMail />
              <p>
                contact@gmail.com
              </p>
            </div>
            <div className=' w-fit flex space-x-5'><FaFacebook /><FaInstagram /><FiYoutube /></div>
          </div>
        </div>
      </div>
      <div className='bg-[#276A7B] text-sm text-white flex items-center justify-evenly font-light p-1'>
        <div className='border-t-2 flex flex-col md:flex-row space-y-3 md:space-y-0 items-center justify-evenly w-3/5'>
          <div>Copyright 2023 . All right Reserved</div>
          <div className='flex space-x-8'>
            <p>Privacy Policy</p>
            <p>Term Of Service</p>
            <p>Legal Info</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer