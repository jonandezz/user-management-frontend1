import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import UserList from './components/UserList';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(null);

  const logout = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            token ? <Navigate to="/dashboard" /> : <LoginForm setToken={setToken} setUser={setUser} />
          }
        />
        <Route path="/signup" element={<SignupForm />} />
        <Route
          path="/dashboard"
          element={
            token ? (
              <div>
                <h1>Welcome, {user?.name}</h1>
                <button onClick={logout}>Logout</button>
                <UserList token={token} />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* Default route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
