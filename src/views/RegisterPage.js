import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser, checkUsername as checkUsernameAction } from '../store/authSlice';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [isUsernameChecked, setIsUsernameChecked] = useState(false);

  const validateEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      return false;
    } else if (!/[a-zA-Z]/.test(password)) {
      setPasswordError('Password must contain at least one letter.');
      return false;
    } else if (!/\d/.test(password)) {
      setPasswordError('Password must contain at least one number.');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const checkUsername = () => {
    if (userData.username.length < 4) {
      setUsernameError('Username must be at least 4 characters long.');
      setIsUsernameChecked(false);
      return;
    } else {
      setUsernameError('');
      setIsUsernameChecked(true);
    }

    dispatch(checkUsernameAction({ username: userData.username }))
      .unwrap()
      .then((response) => {
        if (!response.isUnique) {
          setUsernameError('Username is already taken.');
          setIsUsernameChecked(false);
        } else {
          setUsernameError('');
          setIsUsernameChecked(true);
        }
      })
      .catch((errorMessage) => {
        setUsernameError(errorMessage || 'Failed to check username. Please try again.');
        setIsUsernameChecked(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    if (name === 'username') {
      setIsUsernameChecked(false);
    }
    if (name === 'password') {
      validatePassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isUsernameChecked) {
      setError('Please check the username for uniqueness.');
      return;
    }
    if (!validateEmail(userData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!validatePassword(userData.password) || userData.password !== userData.confirmPassword) {
      setError('Please correct the password errors.');
      return;
    }
    setError('');
    
    dispatch(registerUser({
      username: userData.username,
      email: userData.email,
      password: userData.password
    }))
      .unwrap()
      .then(() => navigate('/login'))
      .catch((error) => {
        setError(`Registration failed: ${error?.message || 'An error occurred'}`);
      });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            onBlur={checkUsername}
            placeholder="Username"
            required
          />
          <button type="button" onClick={checkUsername}>Check Username</button>
          {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button type="submit" style={{ padding: '8px 16px' }}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
