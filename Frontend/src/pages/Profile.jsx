import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    // Fetch user data and subscriptions (You can replace with actual API calls)
    const fetchData = async () => {
      try {
        const userResponse = await axios.get('/api/users/me');
        const subsResponse = await axios.get('/api/subscriptions');
        setUser(userResponse.data);
        setSubscriptions(subsResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // if (!user) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="dashboard bg-gray-100 min-h-screen py-10 px-4">
      <div className="w-full max-w-7xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-8">Welcome back, Vashu!</h1>

        {/* Overview section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Active Subscriptions</h2>
            <p className="text-2xl font-bold">{subscriptions.length}</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Upcoming Renewals</h2>
            {/* <p className="text-2xl font-bold">
              {subscriptions.filter(sub => new Date(sub.renewalDate) > new Date()).length}
            </p> */}
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Total Spent This Month</h2>
            <p className="text-2xl font-bold">$200</p> {/* Replace with actual data */}
          </div>
        </div>

        {/* Subscription list */}
        <h2 className="text-2xl font-bold mb-6">Your Subscriptions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* {subscriptions.map((sub) => (
            <div key={sub.id} className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">{sub.name}</h3>
              <p className="text-gray-600">Next renewal: {new Date(sub.renewalDate).toLocaleDateString()}</p>
              <p className="text-gray-600">Cost: ${sub.price}/month</p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
