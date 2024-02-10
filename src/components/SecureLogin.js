import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './SecureLogin.scss';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

const SecureLogin = ({ onLogin }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        onLogin(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="secure-login">
          <Field type="email" name="email" placeholder="Email" />
          <Field type="password" name="password" placeholder="Password" />
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SecureLogin;
