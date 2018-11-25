import styled from 'styled-components';
import { media } from '../../utils/media';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
`;

export const Heading = styled.h1`
  font-size: ${props => props.theme.heading4};
`;

export const Showcase = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
