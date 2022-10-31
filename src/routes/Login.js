import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Login1 from '../components/Login1'

const Login = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='Login'/>
        <Login1 />
        <Footer />
    </div>  )
}

export default Login