import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />
                        <div>
                            <h4>Find out more</h4>
                            <p>916 placeholder</p>
                            <p>Sacramento, CA</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <p><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> 916-123-1234</p>
                    </div>
                    <div className='email'>
                        <p><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> food@food.com</p>
                    </div>
                </div>
                <div className='right'>
                    <h4>About food Insecurity</h4>
                    <p>"food food food food food food food food food "</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer