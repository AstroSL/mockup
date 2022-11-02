import React,{useState} from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Log from '../components/Log'
//import Register from '../components/Register'

const Login = () => {

  

  return (
    <div>
        <Navbar />
        <HeroImage heading='LOGIN'/>
        <Log />
        
        <Footer />
    </div>
  )
}

export default Login