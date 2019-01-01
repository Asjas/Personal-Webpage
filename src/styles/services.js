import styled from 'styled-components';
import { media } from '../utils/media';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Paragraph = styled.p`
  font-size: ${props => props.theme.heading3};
`;
