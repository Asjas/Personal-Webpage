import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../../utils/media';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 65vh;
`;

export const Heading = styled.h1`
  font-size: ${props => props.theme.heading1};
  color: ${props => props.theme.black};
`;

export const Paragraph = styled.p`
  font-size: ${props => props.theme.heading3};
  color: ${props => props.theme.black};
`;

export const StyledLink = styled(Link)`
  font-size: ${props => props.theme.fontL};
  text-decoration: none;
  color: ${props => props.theme.maroon};
  padding: 3px;
  &:hover {
    color: lightcoral;
  }
  &:focus {
    outline: 1px solid ${props => props.theme.maroon};
  }
`;
