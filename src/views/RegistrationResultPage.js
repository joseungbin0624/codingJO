// E:\project\codingJO\src\views\RegistrationResultPage.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

const RegistrationResultPage = () => {
    const { isSuccess, isError, message } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            dispatch(reset());
        };
    }, [dispatch]);

    useEffect(() => {
        if (!isSuccess && !isError) {
            navigate('/register');
        }
    }, [isSuccess, isError, navigate]);

    return (
        <div>
            {isSuccess ? (
                <div>
                    <h1>가입 성공!</h1>
                    <p>{message}</p>
                    <button onClick={() => navigate('/login')}>로그인하기</button>
                </div>
            ) : isError ? (
                <div>
                    <h1>가입 실패...</h1>
                    <p>{message}</p>
                    <button onClick={() => navigate('/register')}>다시 시도하기</button>
                </div>
            ) : null}
        </div>
    );
};

export default RegistrationResultPage;
