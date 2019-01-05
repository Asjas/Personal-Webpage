import React from 'react';
import { Formik } from 'formik';
import {
  StyledForm,
  Fieldset,
  Label,
  LabelText,
  StyledField,
  StyledErrorMessage,
  StyledTextArea,
} from './styles';
import StyledButton from '../Button';

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
      <StyledForm name="contact-form" method="POST" netlify>
        <Fieldset
          data-testid="form-disabled"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          <Label htmlFor="name">
            <LabelText>Enter your name:</LabelText>
            <StyledErrorMessage name="name" component="span" />
            <StyledField id="name" type="text" name="name" placeholder="full name" />
          </Label>
          <Label htmlFor="email">
            <LabelText>Enter your email:</LabelText>
            <StyledErrorMessage name="email" component="span" />
            <StyledField
              id="email"
              type="email"
              name="email"
              placeholder="example@gmail.com"
            />
          </Label>
          <Label htmlFor="message">
            <LabelText>Enter a message:</LabelText>
            <StyledErrorMessage name="message" component="span" />
            <StyledTextArea
              component="textarea"
              id="message"
              name="message"
              placeholder="type your message here"
            />
          </Label>
          <StyledButton />
        </Fieldset>
      </StyledForm>
    )}
  </Formik>
);

export default ContactForm;
