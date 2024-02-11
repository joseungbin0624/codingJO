import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './CollaborationForm.scss';

const CollaborationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
});

const CollaborationForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ email: '', message: '' }}
    validationSchema={CollaborationSchema}
    onSubmit={onSubmit}
  >
    {({ errors, touched }) => (
      <Form className="collaboration-form">
        <Field name="email" type="email" />
        {errors.email && touched.email ? <div>{errors.email}</div> : null}
        <Field name="message" as="textarea" />
        {errors.message && touched.message ? <div>{errors.message}</div> : null}
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);

export default CollaborationForm;
