import React from 'react'
import Footer from '../components/Footer'
import AboutCards from '../components/About'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'

/*<HeroImage heading ='Sac Valley College Corps' text='Working with students at Sac State'/>*/
const About = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading ='Sac Valley College Corps' text='Working with students at Sac State'/>
        <AboutCards/>
        <Footer/>
    </div>
  )
}

export default About