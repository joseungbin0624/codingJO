import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './FeedbackForm.scss';

const FeedbackSchema = Yup.object().shape({
  feedback: Yup.string().required('Feedback is required'),
});

const FeedbackForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ feedback: '' }}
      validationSchema={FeedbackSchema}
      onSubmit={(values, actions) => {
        onSubmit(values.feedback);
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className="feedback-form">
          <Field as="textarea" name="feedback" placeholder="Enter your feedback"/>
          {errors.feedback && touched.feedback ? <div className="error">{errors.feedback}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FeedbackForm;

