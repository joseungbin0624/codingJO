import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, logoutUser } from '../store/authSlice';
import '../styles/RegisterPage.scss'; // 정확한 경로 확인 필요

const RegisterPage = () => {
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState({ username: '', email: '', password: '' });

    // 기타 함수 구현

    return (
        <div className="register-page">
            {/* 폼 구현 */}
        </div>
    );
};

export default RegisterPage;
