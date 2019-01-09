import styled from 'styled-components';
import { media } from '../../utils/media';

export const Button = styled.button`
  background-color: ${props => props.theme.maroon};
  border-radius: 4px;
  border: ${props => props.theme.maroon};
  color: #fff;
  cursor: pointer;
  font-family: Contender;
  font-size: ${props => props.theme.fontXL};
  outline: 0;
  padding: 7px;
  text-transform: capitalize;
  width: 100%;

  &:hover {
    outline: ${props => props.theme.blackBorderMd};
  }

  &:focus {
    outline: ${props => props.theme.blackBorderMd};
  }
`;
