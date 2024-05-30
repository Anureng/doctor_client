import React from 'react'
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import LoginData from '../components/LoginData'

function LoginPage() {
  return (
    <div>
      <Navbar/>
      <LoginData/>
      <Footer/>
    </div>
  )
}

export default LoginPage