import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const
 [averageLoginFrequency, setAverageLoginFrequency] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);

        // Calculate statistics
        setTotalUsers(response.data.length);
        setActiveUsers(response.data.filter(user => user.lastLogin) /* recent date */.length);
        // Calculate average login frequency based on user data
        setAverageLoginFrequency(/* your calculation here */);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Total Users: {totalUsers}</p>
      <p>Active Users: {activeUsers}</p>
      <p>Average Login Frequency: {averageLoginFrequency}</p>
      {/* Display other statistics or visualizations as needed */}
    </div>
  );
}

export default Admin;