import styled from 'styled-components';
import { media } from '../../src/utils/media';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 20px 20px 0 10px;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.red};
  font-size: ${props => props.theme.fontXL};
`;

export const StyledSpan = styled.span`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontL};
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.black};
  padding: 20px 0;
  width: 90%;

  a {
    color: ${props => props.theme.gold};
  }
`;
