import React from 'react'
import NavBar from "../components/NavBar"
import AboutDoctor from '../components/AboutDoctor'
import ScrollingDoctor from '../components/ScrollingDoctor'
import Footer from "../components/Footer"

function DoctorProfile() {
  return (

    <>
      <NavBar />
      <AboutDoctor />
      <ScrollingDoctor />
      <Footer />
    </>

  )
}

export default DoctorProfile