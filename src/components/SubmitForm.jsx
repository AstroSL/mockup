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
            <select className="option1">
                <option>Perishable</option>
                <option>Perishable-Refrigerated</option>
                <option>Non-Perishable</option>
            </select>
            <label for="spoil-date-input">Spoil Date</label>
                    <input id="spoil-date-input" type="date" />
            <label>Food Quantity(in lbs)</label>
            <input type='text'></input>
            <label>Food Quantity(volume?)</label>
            <input type='text'></input>
            <label>Market Value</label>
            <input type='text'></input>
                <input id="spoil-date-input" type="date" />

            <label>Allergens</label>
            <input type='text'></input>
            <label>Quantity (Volume?)</label>
            <input type='text'></input>
            <label>Market Value</label>
            <input type='text'></input>

            <button className='btn'>Submit</button>
            <button className='btn'>Reset</button>

            
        </form>
    </div>
  )
}

export default SubmitForm