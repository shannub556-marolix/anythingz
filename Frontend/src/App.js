import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Store_Register from './components/Store_Register';
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Helper function to handle login state
  const handleLogin = (authState) => {
    setIsAuthenticated(authState);
    if (authState) {
      localStorage.setItem('isAuthenticated', 'true');
    } else {
      localStorage.removeItem('isAuthenticated');
    }
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/store-register" element={<Store_Register />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated || localStorage.getItem('isAuthenticated') === 'true' ? (
              <Dashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
