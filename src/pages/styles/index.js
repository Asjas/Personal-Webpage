import styled from 'styled-components';
import { media } from '../../utils/media';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Heading = styled.h1`
  font-size: ${props => props.theme.heading2};
  color: ${props => props.theme.maroon};
  width: 60%;
  word-wrap: wrap;
  text-align: center;
`;
