import React from 'react'
import './VideoStyles.css'
import {Link} from 'react-router-dom'

import sacOne from '../assets/sacv.mp4'

const Video = () => {
  return (
    <div className ='sac'>
        <video autoPlay loop muted id='video'>
            <source src={sacOne} type='video/mp4' />
        </video>
        <div className='content'>
            <h1>Transportation Wizard</h1>
            <p>Mockup</p>
        <div>
             <Link to='/form' className='btn'>Form</Link>
             <Link to='/food' className='btn'>Food</Link>    
            </div>
        </div>
    </div>
    )
}

export default Video