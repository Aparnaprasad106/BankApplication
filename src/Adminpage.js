// AdminPanel.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        const usersResponse = await axios.get('/api/users', config);
        setUsers(usersResponse.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        // Handle error
      }
    };

    fetchUsers();
  }, []);

  const handleDisableUser = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      await axios.put(`/api/users/${userId}/disable`, {}, config);
      // Refresh user list or update state accordingly
    } catch (error) {
      console.error('Error disabling user:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <h3>User Management:</h3>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.username} - {user.balance}
            <button onClick={() => handleDisableUser(user._id)}>Disable</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
