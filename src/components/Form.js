import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    <div className='form'>
        <form className='form1'>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='text'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Message</label>
            <textarea rows='6' placeholder='Enter your message'></textarea>
            <button className='btn'>Submit</button>
        </form>


        <div className='news'>
          <form className='news1'>
              <label>Stay updated, Join our newsletter</label>
              <input type='text'></input>
              <button className='btn'>Submit</button>
              <p>By submitting this form, you are consenting to receive marketing emails from: placeholder</p>
          </form>
        </div>
    </div>
  )
}

export default Form