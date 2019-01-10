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

export const Heading = styled.h2`
  margin: 10px 0;
`;

export const StyledLink = styled(Link)`
  font-size: ${props => props.theme.heading3};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.maroon};
    text-decoration: underline overline;
  }
`;

export const Paragraph = styled.p`
  font-size: ${props => props.theme.fontMd};
`;

export const Date = styled.span`
  display: block;
  font-size: ${props => props.theme.fontSm};
  font-style: italic;
`;

export const ReadingTime = styled.span`
  display: block;
  font-size: ${props => props.theme.fontSm};
`;
