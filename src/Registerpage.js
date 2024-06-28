// LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';

function Registerpage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    console.log('inside');
    try {
      const response = await axios.post('/api/auth/register', {
        username,
        password
      });
      console.log(response);
      localStorage.setItem('token', response.data.token);
      // Redirect to dashboard or handle login success
    } catch (error) {
      console.error('Register error:', error);
      // Handle login error
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Registerpage;
