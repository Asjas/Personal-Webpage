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
  color: ${props => props.theme.maroon};
  font-family: Contender;
  font-size: ${props => props.theme.heading2};
  font-weight: 300;
  letter-spacing: 0.04rem;
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
  font-family: Abberwick;
  font-size: ${props => props.theme.fontMd};
  letter-spacing: 0.03rem;
`;

export const Date = styled.span`
  display: block;
  font-family: Abberwick;
  font-size: ${props => props.theme.fontSm};
  font-style: italic;
  letter-spacing: 0.03rem;
`;

export const ReadingTime = styled.span`
  display: block;
  font-family: Abberwick;
  font-size: ${props => props.theme.fontSm};
  letter-spacing: 0.03rem;
`;
