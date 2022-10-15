import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import AboutCards from '../components/About'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading ='Sac Valley College Corps'/>
        <AboutCards/>
        <Footer/>
    </div>
  )
}

export default About