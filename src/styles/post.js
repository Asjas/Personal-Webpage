import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.article`
  margin: 0 auto;
  width: 90%;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.marron};
  font-family: Contender;
  font-size: ${props => props.theme.heading1};
`;
