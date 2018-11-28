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
    initialValues={{ name: '', email: '', textarea: '' }}
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

      if (!values.textarea) {
        errors.textarea = 'Required!';
      }

      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <StyledForm>
        <Fieldset disabled={isSubmitting} aria-busy={isSubmitting}>
          <Label>
            <LabelText>Enter your name:</LabelText>
            <StyledErrorMessage name="name" component="span" />
            <StyledField type="text" name="name" placeholder="full name" />
          </Label>
          <Label>
            <LabelText>Enter your email:</LabelText>
            <StyledErrorMessage name="email" component="span" />
            <StyledField type="email" name="email" placeholder="example@gmail.com" />
          </Label>
          <Label>
            <LabelText>Enter a message:</LabelText>
            <StyledErrorMessage name="textarea" component="span" />
            <StyledTextArea
              component="textarea"
              name="textarea"
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
