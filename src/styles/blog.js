import styled from 'styled-components';
import { media } from '../utils/media';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
`;

export const Paragraph = styled.p`
  font-size: ${props => props.theme.heading3};
`;
