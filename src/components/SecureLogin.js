import React, { useState } from 'react';
import { login } from '../services/authService';
import lockIcon from '../assets/icons/lock-solid.svg'; // 아이콘 경로 추가
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
      <img src={lockIcon} alt="Login" className="login-icon" /> {/* 아이콘 추가 */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={credentials.email}
        onChange={handleChange}
        aria-label="Email"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
        aria-label="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default SecureLogin;
