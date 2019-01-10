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
  font-weight: 300;
  margin: 0;
  padding: 0 0 0 36px;
  width: 90%;

  ${media.laptopL`
    font-size: ${props => props.theme.heading1};
    margin: 0 auto;
    padding: 0;
    width: 500px;
  `};
`;

export const StyledSpan = styled.span`
  color: ${props => props.theme.black};
  font-family: Contender;
  font-size: ${props => props.theme.heading2};
  font-weight: 300;

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
    text-decoration: none;

    &:hover,
    &:focus {
      color: ${props => props.theme.maroon};
      text-decoration: underline overline;
    }
  }

  ${media.laptopL`
    width: 500px;
  `};
`;
