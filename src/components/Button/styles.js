import styled from 'styled-components';
import { media } from '../../utils/media';

export const Button = styled.button`
  background-color: ${props => props.theme.purple};
  border-radius: 4px;
  border: ${props => props.theme.purple};
  color: #fff;
  cursor: pointer;
  font-size: ${props => props.theme.fontL};
  font-size: ${props => props.theme.fontL};
  outline: 0;
  padding: 14px;
  width: 100%;

  &:hover {
    outline: ${props => props.theme.goldBorderMd};
  }

  &:focus {
    outline: ${props => props.theme.goldBorderMd};
  }
`;
