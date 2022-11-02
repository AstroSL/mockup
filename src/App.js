import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About';
import Contact from './routes/Contact';
import Register from './routes/Register';
import Login from './routes/Login';
import Submit from './routes/Submit';


function App() {
  
  
  return (
    < >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/submit' element={<Submit />}/>
      </Routes>
    </>
  );
}

export default App;
