import React from 'react';
import styled from 'styled-components';
import StyledButton from './button';
import { media } from '../utils/media';

const Wrapper = styled.div`
  margin: 40px auto;
  padding: 55px 0;
  position: absolute;
`;

const Heading = styled.h2`
  font-size: 2.4rem;
  line-height: 2.6rem;
  margin-bottom: 40px;

  ${media.small`
    font-size: 2.2rem;
    line-height: 2.4rem;
  `};

  ${media.xSmall`
    font-size: 2rem;
    line-height: 2.2rem;
    margin: 0 auto 40px auto;
    width: 70vw;
  `};
`;

const Form = styled.form`
  max-width: 550px;
`;

const FormBlock = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
  display: block;
  margin: 0 auto;
  max-width: 450px;
  padding: 30px;
  position: relative;
  width: 100%;

  &:before,
  &:after {
    background: #fff;
    border-radius: 5px;
    border: solid 1px #e6e6e6;
    bottom: 0;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: scale(0.9) translate(0, 0);
    transition: all 0.3s ease;
    width: 100%;
    z-index: -1;
  }

  &:after {
    transition-delay: 0.05s;
  }

  &:hover::before {
    transform: scale(0.96) translate(0, 16px);
    z-index: -1;
  }

  &:hover::after {
    transform: scale(0.92) translate(0, 32px);
    z-index: -2;
  }

  ${media.small`
    max-width: 350px;
  `};
`;

const Label = styled.label`
  font-size: 1.6rem;
  line-height: 1.8rem;

  ${media.small`
    font-size: 1.4rem;
    line-height: 1.6rem;
  `};
`;

const Input = styled.input`
  background: #fff;
  border: 1px solid #e6e6e6;
  border-bottom-width: 3px;
  border-radius: 5px;
  display: inline-block;
  font-size: 1.4rem;
  height: 50px;
  line-height: 1.6rem;
  margin: 3px 0 20px 0;
  outline: none;
  padding: 0 20px;
  transition: all 0.3s ease;
  width: 100%;

  &:active {
    border-color: #ccc;
  }

  &:focus {
    border-color: #ccc;
  }

  ${media.small`
    font-size: 1.3rem;
    line-height: 1.5rem;
  `};
`;

const TextArea = styled.textarea`
  background: #fff;
  border: 1px solid #e6e6e6;
  border-bottom-width: 3px;
  border-radius: 5px;
  display: inline-block;
  height: 50px;
  line-height: 1.6px;
  outline: none;
  font-size: 1.4rem;
  padding: 20px;
  transition: all 0.3s ease;
  min-width: 390px;
  max-width: 348px;
  min-height: 130px;
  max-height: 300px;
  margin: 3px 0 20px 0;

  &:active {
    border-color: #ccc;
  }

  &:focus {
    border-color: #ccc;
  }

  ${media.small`
    font-size: 1.3rem;
    line-height: 1.5rem;
    min-width: 290px;
    max-width: 290px;
  `};
`;

const ContactForm = () => (
  <Wrapper>
    <Heading>Quickly &amp; easily contact me using the form below.</Heading>
    <Form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <FormBlock>
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
