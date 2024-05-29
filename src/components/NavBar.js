import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className=' text-white bg-emerald-900'>
        <Link className='ml-5' to="/" >home</Link>
        <Link className='ml-5' to="/login" >Login</Link>
        <Link className='ml-5' to="/signup" >signup</Link>
        
    </div>
  )
}

export default NavBar