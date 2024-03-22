import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 로그인 후 페이지 이동을 위해 필요
import '../styles/UserProfileCard.scss';
import { login } from '../services/authService'; // 로그인 서비스 호출을 위해 필요

function SecureLogin() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(credentials.email, credentials.password);
      navigate('/dashboard'); // 로그인 성공 후 대시보드로 이동
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed, please try again.');
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
