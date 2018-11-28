import styled from 'styled-components';
import { media } from '../utils/media';

export const Container = styled.div`
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
  font-size: ${props => props.theme.heading1};
  padding: 0 0 30px 30px;
  width: 90%;

  ${media.laptopL`
    font-size: ${props => props.theme.heading2};
    margin: 0 auto;
    padding: 0 0 30px 0;
    width: 500px;
  `};
`;

export const StyledSpan = styled.span`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.heading2};

  ${media.laptopL`
    font-size: ${props => props.theme.heading3};
  `};
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontL};
  margin: 0 auto;
  padding: 10px 0;
  width: 90%;

  a {
    color: ${props => props.theme.purple};
    text-decoration-color: ${props => props.theme.purpleAnchorLight};

    &:hover,
    &:focus {
      text-decoration-color: ${props => props.theme.purpleAnchor};
    }
  }

  ${media.laptopL`
    width: 500px;
  `};
`;
