import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(135deg, #4290f7 20%, #29bbff 80%);
  font-size: 1rem;
  margin: 40px auto;
  padding: 55px 0;
  position: relative;
  z-index: 3;
  max-width: 1200px;
`;

const Heading = styled.h2`
  font-size: 2.4rem;
  line-height: 2.6rem;
  margin-bottom: 40px;

  ${media.small`
    font-size: 2.2rem;
    line-height: 2.4rem;
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
  height: 50px;
  font-size: 1.4rem;
  outline: none;
  padding: 0 20px;
  transition: all 0.3s ease;
  margin: 3px 0 20px 0;
  width: 100%;

  &:active {
    border-color: #ccc;
  }

  &:focus {
    border-color: #ccc;
  }

  ${media.small`
    font-size: 1.3rem;
  `};
`;

const TextArea = styled.textarea`
  background: #fff;
  border: 1px solid #e6e6e6;
  border-bottom-width: 3px;
  border-radius: 5px;
  display: inline-block;
  height: 50px;
  line-height: 50px;
  outline: none;
  font-size: 1.4rem;
  padding: 0 20px;
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
    min-width: 290px;
    max-width: 290px;
  `};
`;

const Button = styled.input`
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    rgba(0, 0, 0, 0) 25%,
    rgba(0, 0, 0, 0) 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    rgba(0, 0, 0, 0) 75%,
    rgba(0, 0, 0, 0)
  );
  background-color: #24b41f;
  background-size: 20px 20px;
  border: solid 1px #24b41f;
  border-bottom-width: 3px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1.6rem;
  padding: 14px;
  border-radius: 4px;
  outline: 0;
  position: relative;
  transition: all 0.3s ease;
  z-index: 1;

  &:hover {
    background-size: 40px 40px;
  }

  &:focus {
    outline: 2px solid black;
  }

  ${media.small`
    font-size: 1.5rem;
    padding: 10px;
  `};
`;

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      textarea: '',
    };
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <Wrapper>
        <Heading>Quickly &amp; easily contact me using the form below.</Heading>
        <Form onSubmit={this.handleSubmit}>
          <FormBlock>
            <Label htmlFor="name">Enter your name:</Label>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="John Doe"
            />
            <Label htmlFor="email">Enter your email:</Label>
            <Input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="example@gmail.com"
            />
            <Label htmlFor="textarea">Please enter a message:</Label>
            <TextArea
              name="textarea"
              value={this.state.textarea}
              onChange={this.handleChange}
              placeholder="Please type your message here."
            />
            <Button type="submit" value="Submit" />
          </FormBlock>
        </Form>
      </Wrapper>
    );
  }
}
