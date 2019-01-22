import styled from 'styled-components';
import { media } from '../../utils/media';

export const Button = styled.button`
  background-color: ${props => props.theme.maroon};
  border-radius: 4px;
  border: 2px solid ${props => props.theme.maroon};
  color: #fff;
  cursor: pointer;
  font-family: Contender;
  font-size: ${props => props.theme.fontXL};
  outline: 0;
  text-transform: capitalize;
  width: 100%;

  &:hover,
  &:focus {
    background-color: #fff;
    color: ${props => props.theme.maroon};
    border: 2px solid ${props => props.theme.maroon};
  }
`;
