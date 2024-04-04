// E:\project\codingJO\src\views\LoginPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.scss';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // credentials 상태에서 username을 email로 변경
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [loginError, setLoginError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(loginUser(credentials)).unwrap();
            navigate('/success'); // 로그인 성공 시 리다이렉션
        } catch (error) {
            setLoginError(error.message);
        }
    };

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="email" // input 타입을 email로 변경
                    name="email" // name을 email로 변경
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
                {loginError && <div className="error" style={{color: 'red'}}>{loginError}</div>}
            </form>
        </div>
    );
};

export default LoginPage;
