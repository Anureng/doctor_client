import React from 'react'
import NavBar from "../components/NavBar"
import AboutDoctor from '../components/AboutDoctor'
import ScrollingDoctor from '../components/ScrollingDoctor'
import Footer from "../components/Footer"
import DoctorAboutReview from '../components/DoctorAboutReview'
function About() {
  return (
    <>
  <NavBar/>

  <AboutDoctor/>
  <DoctorAboutReview/>
  <ScrollingDoctor/>
  <Footer/>
  </>
  )
}

export default About