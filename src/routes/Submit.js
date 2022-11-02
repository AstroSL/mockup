import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import SubmitForm from '../components/SubmitForm'


const Submit = () => {

  

  return (
    <div>
        <Navbar />
        <HeroImage heading='Register'/>
        <SubmitForm />

        <Footer />
    </div>
  )
}

export default Submit