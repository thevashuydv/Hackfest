import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    axios.get('/api/subscriptions')
      .then(response => setSubscriptions(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="subscription-overview">
        <h2>Total Spending</h2>
        {/* <ul>
          {subscriptions.map(sub => (
            <li key={sub.id}>{sub.name}: ${sub.amount}</li>
          ))}
        </ul> */}
      </div>
    </main>
  );
};

export default Dashboard;
