import React, { Fragment } from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';

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
  background-color: #579af2;
  background-size: 20px 20px;
  border: solid 1px #579af2;
  border-bottom-width: 3px;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  font-size: 1.6rem;
  line-height: 1.8rem;
  padding: 14px;
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
    line-height: 1.7rem;
    padding: 10px;
  `};
`;

const StyledButton = () => (
  <Fragment>
    <Button type="submit" value="Submit" />
  </Fragment>
);

export default StyledButton;
