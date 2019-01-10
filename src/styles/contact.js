import styled from 'styled-components';
import { media } from '../utils/media';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 20px 20px 0 10px;

  ${media.laptopL`
    grid-template-columns: 1fr;
    height: 100%;
  `};
`;

export const Heading = styled.h1`
  color: ${props => props.theme.maroon};
  font-family: Contender;
  font-size: ${props => props.theme.heading1};
  font-weight: 500;
  width: 90%;

  ${media.laptopL`
    font-size: ${props => props.theme.heading1};
    margin: 0 auto;
    width: 500px;
  `};
`;

export const StyledSpan = styled.span`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.heading2};
  font-family: Contender;
  font-weight: 500;

  ${media.laptopL`
    font-size: ${props => props.theme.heading2};
  `};
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.black};
  font-family: Abberwick;
  font-size: ${props => props.theme.fontMd};
  margin: 0 auto;
  padding: 10px 0;
  width: 90%;

  a {
    color: ${props => props.theme.maroon};
    font-family: Abberwick;
    font-size: ${props => props.theme.fontMd};
    text-decoration-color: ${props => props.theme.maroon};

    &:hover,
    &:focus {
      text-decoration-color: ${props => props.theme.maroon};
    }
  }

  ${media.laptopL`
    width: 500px;
  `};
`;
