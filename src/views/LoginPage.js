import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, logoutUser } from '../store/authSlice';
import '../styles/LoginPage.scss';

const LoginPage = () => {
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(credentials));
    };

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" value={credentials.username} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
