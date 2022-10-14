import React from 'react'
import './VideoStyles.css'
import {Link} from 'react-router-dom'

import sacOne from '../assets/sacv.mp4'

const Video = () => {
  return (
    <div className ='food'>
        <video autoPlay loop muted id='video'>
            <source src={sacOne} type='video/mp4' />
        </video>
        <div className='content'>
            <h1>Food Insecurity</h1>
            <p>Sacramento</p>
        <div>
             <Link to='/checklist' className='btn'>Checklist</Link>
             <Link to='/placerholder1' className='btn'>Placeholder1</Link>    
            </div>
        </div>
    </div>
    )
}

export default Video