import React from 'react'
import './AboutStyles.css'



/*https://www.youtube.com/watch?v=gk_68OJIevI 2:40 */

const About = () => {
  return (
    <div className='about'>
        <div className='card-container'>
            <div className='card'> 
                <center><h3>Things to consider</h3></center>
                <span className='bar'></span>
                <p className='cl'>- Refrigeration, make sure have ice chest</p>
                <p>- If picking things hot, need to be cooled within two hours</p>
                <p className='indent'>-Cannot put something hot to cold </p>
                <p className='indent'>-70 degree temperature, afterwards 41 degree and under</p>
                <p>- Temperature danger zone when traveling with food</p>
                <p className='indent'>-70-135 degree temperature</p>
                <p>- Foil pans and Cambro recommended</p>



            </div>

            <div className='card'> 
            <center><h3>Check List</h3></center>
              <input type='checkbox' id="option-all"></input>
                <label for="option all"> Select all</label>
                <br></br>

                






            </div>
        </div>  
    </div>
  )
}

export default About