// LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Registerpage() {
  const navigate = useNavigate("")
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/register', {
        username,
        password
      });
      console.log(response.data); // Log response for debugging
      localStorage.setItem('token', response.data.token);
      // Handle successful registration (redirect or show success message)
      alert('user registration successfull');
      navigate('/login')

    } catch (error) {
      console.error('Registration error:', error);
      // Handle registration failure (show error message, etc.)
    }
  };
  

  return (
    <div className='border mt-5 ms-5 w-25 mt-5'>
      <h2 className='text-center'>Register</h2>
      <input className='ms-5' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br></br>
      <input className='ms-5 mt-2 mb-2' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br></br>
      <button className='ms-5 mb-2' onClick={handleRegister}>Register</button>
      <br />
      <h6> Already Registerd? Please <a href='/login' className='text-danger'>Login</a> here</h6>
      </div>
  );
}

export default Registerpage;
