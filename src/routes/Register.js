import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Registration from '../components/Registration'


const Register = () => {

  

  return (
    <div>
        <Navbar />
        <HeroImage heading='Register'/>
        <Registration />

        <Footer />
    </div>
  )
}

export default Register