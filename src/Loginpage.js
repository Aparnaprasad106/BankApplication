// LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate("")
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', {
        username,
        password
      });
      console.log(response);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard')
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error
    }
  };

  return (
    <div className='ms-5 mt-5 border w-50'>
      <h2 className='text-center'>Login</h2>
      <input className=' ms-5 mb-2' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br></br>
      <input className='ms-5 mb-2' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br></br>
      <button className='ms-5 mb-2' onClick={handleLogin}>Login</button>
      <h6> Not Registerd? Please <a href='/' className='text-danger'>Register</a> here</h6>
    </div>
  );
}

export default LoginPage;
