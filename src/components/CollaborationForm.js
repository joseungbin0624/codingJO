import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './CollaborationForm.scss';

const CollaborationFormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
});

const CollaborationForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ email: '', message: '' }}
      validationSchema={CollaborationFormSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="collaboration-form">
          <Field name="email" type="email" placeholder="Your email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <Field name="message" as="textarea" placeholder="Your message" />
          {errors.message && touched.message ? <div>{errors.message}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default CollaborationForm;

