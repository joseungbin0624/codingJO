import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import authService from '../services/authService';

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleRegister = async () => {
    try {
      await authService.register(userData);
      // 회원가입 성공 후 처리
    } catch (error) {
      // 에러 처리
    }
  };

  return (
    <Container>
      <h1>Register</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" onChange={e => setUserData({ ...userData, username: e.target.value })} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={e => setUserData({ ...userData, email: e.target.value })} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e => setUserData({ ...userData, password: e.target.value })} />
        </Form.Group>

        <Button variant="primary" onClick={handleRegister}>
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
