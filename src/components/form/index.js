import React from 'react';
import {
  Wrapper,
  Heading,
  Form,
  FormBlock,
  Label,
  Input,
  TextArea,
} from './styles';
import StyledButton from '../button';

const ContactForm = () => (
  <Wrapper>
    <Heading>Quickly &amp; easily contact me using the form below.</Heading>
    <Form name="contact" method="POST" netlify>
      <FormBlock>
        <input type="hidden" name="form-name" value="contact" />
        <Label htmlFor="name">Enter your name:</Label>
        <Input type="text" name="name" placeholder="Your name" required />
        <Label htmlFor="email">Enter your email:</Label>
        <Input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          required
        />
        <Label htmlFor="textarea">Please enter a message:</Label>
        <TextArea
          name="textarea"
          placeholder="Please type your message here."
          required
        />
        <StyledButton />
      </FormBlock>
    </Form>
  </Wrapper>
);

export default ContactForm;
