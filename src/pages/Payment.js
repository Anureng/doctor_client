import React from 'react'
import NavBar from "../components/NavBar"
import PaymentContent from '../components/PaymentContent'
import Circles from '../components/ConcentricCircle/Circles'
import Footer from "../components/Footer"

function Payment() {
  return (
    <>
      <NavBar className="relative z-50" />
      <div className='flex md:flex-row  justify-between  h-fit w-[95%] mx-auto flex-col relative z-10'>
        <PaymentContent />
        <div className='flex flex-col  md:w-[40%] mx-3 h-fit  mt-10 md:mt-[110px] border-[2px] border-[#BEBEBE]'>
          <div className=' justify-between items-center bg-[#007569] text-white  text-center  py-2 font-bold'>Your order</div>
          <div className=' flex flex-row justify-between items-center border-b-2 border-[#BEBEBE] px-2 w-[90%] text-xl py-2 mx-auto'> Doctor Booking  x 1 <span> 500</span></div>
          <div className=' flex flex-row justify-between items-center border-b-2 border-[#BEBEBE] px-2 w-[90%] text-xl py-2 mx-auto'> SubTotal <span> 500</span></div>
          <div className=' flex flex-row justify-between items-center text-[#007569] px-2 w-[90%] text-xl py-2 mx-auto'> Total <span> 500</span></div>
        </div>
      </div>

      <Circles className="  z-[-50] " />



      <Footer />

    </>
  )
}

export default Payment