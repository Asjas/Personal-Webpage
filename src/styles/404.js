import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../utils/media';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const Heading = styled.h1`
  font-size: ${props => props.theme.heading1};
  color: ${props => props.theme.black};
  font-family: Contender;
  font-size: ${props => props.theme.heading1};
  font-weight: 500;
`;

export const Paragraph = styled.p`
  font-size: ${props => props.theme.fontXL};
  color: ${props => props.theme.black};
  font-family: Abberwick;
`;

export const StyledLink = styled(Link)`
  font-size: ${props => props.theme.fontXL};
  text-decoration: none;
  color: ${props => props.theme.maroon};
  padding: 3px;
  font-family: Contender;

  &:hover {
    color: lightcoral;
  }

  &:focus {
    outline: 1px solid ${props => props.theme.maroon};
  }
`;
