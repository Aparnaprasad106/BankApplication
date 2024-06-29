import React, { useState } from 'react';
import axios from 'axios';

function WithdrawalForm() {
  const [amount, setAmount] = useState('');

  const handleWithdrawal = async () => {
    try {
      const response = await axios.post('/api/transactions/withdraw', {
        amount
      });
      console.log(response.data); // Handle success or show a success message
    } catch (error) {
      console.error('Withdrawal error:', error); // Handle error or show an error message
    }
  };

  return (
    <div>
      <h2>Withdraw Money</h2>
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleWithdrawal}>Withdraw</button>
    </div>
  );
}

export default WithdrawalForm;
