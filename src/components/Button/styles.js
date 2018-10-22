import styled from 'styled-components';
import { media } from '../../utils/media';

export const Button = styled.button`
  background-color: ${props => props.theme.grey};
  background-size: 20px 20px;
  border: ${props => props.theme.blackBorderSm};
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
    outline: ${props => props.theme.goldBorderMd};
  }

  &:focus {
    outline: ${props => props.theme.goldBorderMd};
  }
`;
