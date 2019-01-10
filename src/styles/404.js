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

export const Paragraph = styled.p`
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
    text-decoration: underline overline;
  }

  &:focus {
    outline: 1px solid ${props => props.theme.maroon};
  }
`;
