// Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        // Fetch balance
        const balanceResponse = await axios.get('/api/users/balance', config);
        setBalance(balanceResponse.data.balance);

        // Fetch transactions
        const transactionsResponse = await axios.get('/api/transactions/history', config);
        setTransactions(transactionsResponse.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Balance: {balance}</h3>
      <h3>Transaction History:</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            {transaction.type}: {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
