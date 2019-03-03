import React from 'react';
import { Formik } from 'formik';
import StyledButton from './Button';

const ContactForm = () => (
  <Formik
    initialValues={{ name: '', email: '', message: '' }}
    validate={values => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Required!';
      }

      if (!values.email) {
        errors.email = 'Required!';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.message) {
        errors.message = 'Required!';
      }

      return errors;
    }}
    onSubmit={(values, { resetForm }) => {
      setTimeout(() => {
        resetForm();
      }, 600);
    }}
  >
    {({ isSubmitting }) => (
      <form>
        <fieldset
          data-testid="form-disabled"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          <label htmlFor="name">
            <span>Enter your name:</span>
            <span name="name" component="span" />
            <input id="name" type="text" name="name" placeholder="full name" />
          </label>
          <label htmlFor="email">
            <span>Enter your email:</span>
            <span name="email" component="span" />
            <input id="email" type="email" name="email" placeholder="example@gmail.com" />
          </label>
          <label htmlFor="message">
            <span>Enter a message:</span>
            <span name="message" component="span" />
            <textarea
              component="textarea"
              id="message"
              name="message"
              placeholder="type your message here"
            />
          </label>
          <StyledButton />
        </fieldset>
      </form>
    )}
  </Formik>
);

export default ContactForm;
