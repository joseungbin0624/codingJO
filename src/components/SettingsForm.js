import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './SettingsForm.scss';

const SettingsSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too Short!').required('Required'),
});

const SettingsForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ username: '', email: '', password: '' }}
    validationSchema={SettingsSchema}
    onSubmit={onSubmit}
  >
    {({ errors, touched }) => (
      <Form className="settings-form">
        <Field name="username" />
        {errors.username && touched.username ? <div>{errors.username}</div> : null}
        <Field name="email" type="email" />
        {errors.email && touched.email ? <div>{errors.email}</div> : null}
        <Field name="password" type="password" />
        {errors.password && touched.password ? <div>{errors.password}</div> : null}
        <button type="submit">Update</button>
      </Form>
    )}
  </Formik>
);

export default SettingsForm;

