import styled from 'styled-components';
import { Link } from 'gatsby';
import { media } from '../utils/media';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
  width: 100%;
`;

export const Post = styled.div`
  width: 90%;
`;

export const StyledLink = styled(Link)`
  font-size: ${props => props.theme.heading3};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.maroon};
    text-decoration: underline overline;
  }
`;
