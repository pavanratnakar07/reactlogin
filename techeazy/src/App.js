// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import './App.css';
import LoginSignupContainer from './components/login/LoginSignupContainer'; // Your existing LoginSignupContainer
import Dashboard from './components/Dashboard/Dashboard'; // Import Dashboard component

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Default route to show login/signup */}
                    <Route path="/" element={<LoginSignupContainer />} />

                    {/* Dashboard route */}
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
