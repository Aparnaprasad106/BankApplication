// Dashboard.js
import Transfer from './Transfer';
import Balance from './Balance';
import Withdrawal from './Withdrawal'


function Dashboard() {
 

  return (
    <div>
    <h1>Welcome to Your Dashboard</h1>
    <div>
      <Transfer />
    </div>
    <div>
      <Withdrawal />
    </div>
    <div>
      <Balance />
    </div>
  </div>
  );
}

export default Dashboard;
