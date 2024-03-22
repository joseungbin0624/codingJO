import React, { useState } from 'react';
import { login } from '../services/authService';
import '../styles/SecureLogin.scss';

function SecureLogin() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(credentials);
      console.log('Login successful:', response);
      // Redirect or handle login success, e.g., history.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      // Optionally, update UI to reflect the error
    }
  };

  return (
    <form className="secure-login" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={credentials.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default SecureLogin;
