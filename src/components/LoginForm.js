import React, { useState } from 'react';

function LoginForm({ setToken, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    e.preventDefault();
    const res = await fetch('https://user-management-frontend1.vercel.app/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.token) {
      setToken(data.token);
      setUser(data.user);
      localStorage.setItem('token', data.token);
    }
  };

  return (
    <form onSubmit={login}>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
