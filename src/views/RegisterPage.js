import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../utils/apiUtils'; // 수정된 부분
import '../styles/RegisterPage.scss';

function RegisterPage() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await registerUser(userInfo); // 수정된 부분
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <h1>Create Your Account</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={userInfo.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={userInfo.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={userInfo.password} onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default RegisterPage;
