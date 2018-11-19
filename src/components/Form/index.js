import React from 'react';
import { Formik } from 'formik';
import {
  StyledForm,
  Container,
  Label,
  LabelText,
  StyledField,
  StyledErrorMessage,
  TextArea,
} from './styles';
import StyledButton from '../Button';

const ContactForm = () => (
  <Formik
    initialValues={{ name: '', email: '' }}
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
        <Container disabled={isSubmitting} aria-busy={isSubmitting}>
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
            <StyledErrorMessage name="message" component="span" />
            <TextArea name="textarea" placeholder="type your message here." />
          </Label>
          <StyledButton />
        </Container>
      </StyledForm>
    )}
  </Formik>
);

export default ContactForm;
