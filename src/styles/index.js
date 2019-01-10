import styled from 'styled-components';
import { media } from '../utils/media';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.heading3};
`;
