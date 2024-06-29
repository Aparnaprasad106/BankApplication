import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BalanceEnquiry() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetchBalance();
  }, []);

  const fetchBalance = async () => {
    try {
      const response = await axios.get('/api/users/me'); // Assuming endpoint to fetch user details
      setBalance(response.data.balance);
    } catch (error) {
      console.error('Fetch balance error:', error);
    }
  };

  return (
    <div>
      <h2>Balance Enquiry</h2>
      <p>Your current balance: {balance}</p>
    </div>
  );
}

export default BalanceEnquiry;
