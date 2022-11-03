import React from 'react'
import './SubStyles.css'

const SubmitForm = () => {
  return (
    <div className='form'>
        <form className='form1'>
            <label>Food Type</label>
            <input type='text'></input>
            <label>Food Group</label>
            <input type='text'></input>
            <label>Select type</label>
            <select className="option1">
                <option>Perishable</option>
                <option>Perishable-Refrigerated</option>
                <option>Non-Perishable</option>
            </select>
            <label for="spoil-date-input">Spoil Date</label>
                    <input id="spoil-date-input" type="date" />
            <label>Food Quantity in lbs</label>
            <input type='text'></input>
            <label>Food Quantity(volume?)</label>
            <input type='text'></input>
            <label>Market Value</label>
            <input type='text'></input>

            <label>Allergens</label>

            
            <div className='container'> 
              <input type='checkbox' id="option-milk"></input>
              
                <label for="option a"> Milk </label>
                <br></br>
                <input type='checkbox' id="eggs"></input>
                <label for="option b"> Eggs </label>
                <br></br>
                <input type='checkbox' id="treenuts"></input>
                <label for="option c"> Tree Nuts </label>
                <br></br>
                <input type='checkbox' id="peanuts"></input>
                <label for="option d"> Peanuts </label>
                <br></br>
                <input type='checkbox' id="fish"></input>
                <label for="option e"> Fish </label>
                <br></br>
                <input type='checkbox' id="shellfish"></input>
                <label for="option f"> Shellfish </label>
                <br></br>
                <input type='checkbox' id="wheat"></input>
                <label for="option g"> Wheat </label>
                <br></br>
                <input type='checkbox' id="soybeans"></input>
                <label for="option h"> Soybeans </label>
                
            </div>



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