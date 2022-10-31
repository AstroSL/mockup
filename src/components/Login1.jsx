import React,{useState} from 'react'
import './NavbarStyles.css'
import './FooterStyles.css'
import './Login1.css'


const Login = () => {
  const[email,setEmail]=useState('');
  const [pass,setPass]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

  }

  return (
    <>

      <form onsubmit={handleSubmit}>
        <label for="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id='email' name='email'/>
        <label for="password">password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="enter pw" id='password' name='password'/>
        <button type='submit'> Log In</button>

      </form>
      <button className='reg'>Don't have an account? Register here</button>


    </>
)
}

export default Login