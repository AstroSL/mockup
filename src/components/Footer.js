import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaMailBulk, FaPhone, FaSearchLocation } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearchLocation size={20} style={{color:'#ffffff', marginRight: '2rem'}}/>
            <div>
              <p>916 placeholder</p>
              <h4>Sacramento, CA</h4>
            </div>
          </div>
          <div className='phone'>
            <h4><FaPhone size={20} style={{color:'#ffffff', marginRight: '2rem'}}/> 916-916-1166</h4>
          </div>  
          <div/>
          <div className ='email'>
            <h4><FaMailBulk size={20} style={{color:'#ffffff', marginRight: '2rem'}}/>placeholder@mail.com</h4>
          </div>

        </div>
      <div className='right'>
        <h4>About</h4>
        <div className='social'>
          <FaFacebook size={20} style={{color:'#ffffff', marginRight: '2rem'}}/>
        </div>
          
      <div/>
    </div>
    </div>
    </div>
  )
}

export default Footer