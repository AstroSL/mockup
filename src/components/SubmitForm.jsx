import React from 'react'
import './SubStyles.css'

const SubmitForm = () => {
  return (
    <div className='form'>
        <form className='form1'>
            <label>Food Type</label>
            <input type='text'></input>
            <label>Food Quantity(in lbs)</label>
            <input type='text'></input>
            <label>Select type</label>
            <select>
                <option>Perishable</option>
                <option>Perishable-Refrigerated</option>
                <option>Non-Perishable</option>
            </select>
            <label>Subject</label>
            <input type='text'></input>
            <label>Message</label>
            <textarea rows='6' placeholder='Enter your message'></textarea>
            <button className='btn'>Submit</button>
            <button className='btn'>Reset</button>

            
        </form>
    </div>
  )
}

export default SubmitForm