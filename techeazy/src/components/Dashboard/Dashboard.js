import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  const [data, setData] = useState({
    users: 0,
    tasks: 0,
    revenue: 0,
    chartData: {}
  });

  // Simulate fetching data from an API

  // cr
  useEffect(() => {
    // Mock data
    const fetchData = () => {
      const mockData = {
        users: 5000,
        tasks: 120,
        revenue: 12300,
        chartData: {
          labels: ['January', 'February', 'March', 'April', 'May'],
          datasets: [
            {
              label: 'Revenue Over Time',
              data: [12000, 19000, 30000, 25000, 22000],
              fill: false,
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(75,192,192,0.4)',
            },
          ],
        },
      };
      setData(mockData);
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-brand">
          <h1>Dashboard</h1>
        </div>
        <div className="navbar-links">
          <ul>
            <li>Notifications</li>
            <li>Messages</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>Analytics</li>
          <li>Projects</li>
          <li>Team</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">
        <div className="content-header">
          <h2>Overview</h2>
          <p>Get a detailed summary of your activity, projects, and more.</p>
        </div>
        <div className="widgets">
          <div className="widget">
            <h3>Total Users</h3>
            <p>{data.users}</p>
          </div>
          <div className="widget">
            <h3>Tasks Completed</h3>
            <p>{data.tasks}</p>
          </div>
          <div className="widget">
            <h3>Revenue</h3>
            <p>${data.revenue}</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="chart-container">
          <h3>Revenue Over Time</h3>
          <Line data={data.chartData} />
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Techeazy Consulting. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
