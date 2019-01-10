import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../utils/media';

export const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.black};
  font-family: Contender;
  font-size: ${props => props.theme.heading1};
  font-size: ${props => props.theme.heading1};
  font-weight: 500;
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.black};
  font-family: Abberwick;
  font-size: ${props => props.theme.fontXL};
`;

export const StyledLink = styled(Link)`
  color: ${props => props.theme.maroon};
  font-family: Contender;
  font-size: ${props => props.theme.fontXL};
  padding: 3px;
  text-decoration: none;

  &:hover {
    color: lightcoral;
  }

  &:focus {
    outline: 1px solid ${props => props.theme.maroon};
  }
`;
