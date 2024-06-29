import React, { useState } from 'react';
import axios from 'axios';

function TransferForm() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransfer = async () => {
    try {
      const response = await axios.post('/api/transactions/transfer', {
        recipient,
        amount
      });
      console.log(response.data); // Handle success or show a success message
    } catch (error) {
      console.error('Transfer error:', error); // Handle error or show an error message
    }
  };

  return (
    <div>
      <h2>Transfer Money</h2>
      <input type="text" placeholder="Recipient's Username" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
}

export default TransferForm;
