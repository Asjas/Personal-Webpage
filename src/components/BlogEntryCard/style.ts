import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styled from '../../utils/themed-styled-components';

export const Card = styled.section`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: repeat(4, min-content);
  width: 100%;
  border-radius: 2px;
  padding: 20px;
  justify-items: left;
  gap: 0 20px;
  will-change: transform;
  box-shadow: ${props => props.theme.color.card};
  transition: all 0.28s ease-in-out;

  @media (max-width: ${props => props.theme.mobileQuery.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: minmax(150px, max-content) repeat(4, min-content);
    gap: 4px 0;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled(Img)`
  grid-row: 1 / 5;
  width: 100%;
  height: auto;

  @media (max-width: ${props => props.theme.mobileQuery.tablet}) {
    grid-row: 1;
    width: 100%;
    height: auto;
    grid-column: 1 / 3;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 10px;
  font-size: ${props => props.theme.fontSize.heading3};

  @media (max-width: ${props => props.theme.mobileQuery.tablet}) {
    grid-column: 1 / 3;
  }
`;

export const BlogDate = styled.span`
  background: ${props => props.theme.color.black};
  border-radius: 25px;
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.fontSize.tags};
  align-self: center;
  padding: 0px 6px;
  width: auto;

  @media (max-width: ${props => props.theme.mobileQuery.tablet}) {
    grid-column: 1 / 3;
  }
`;

export const BlogLink = styled(Link)`
  text-decoration: none;

  @media (max-width: ${props => props.theme.mobileQuery.tablet}) {
    grid-row: 2;
    grid-column: 1 / 3;
  }
`;

export const BlogTags = styled.span`
  display: block;
  font-style: italic;
  height: auto;
  padding-left: 0;
  margin: 0;

  @media (max-width: ${props => props.theme.mobileQuery.tablet}) {
    grid-column: 1 / 3;
  }

  .blogpost__tag {
    background: ${props => props.theme.color.primary};
    border-radius: 25px;
    color: ${props => props.theme.color.white};
    display: inline-block;
    font-family: Goldsmith;
    font-size: ${props => props.theme.fontSize.small};
    padding: 2px 6px;
    margin: 8px 8px 8px 0;
    font-style: italic;
  }

  .blogpost__tag:hover {
    text-decoration: none;
    background: ${props => props.theme.color.navbar};
    color: ${props => props.theme.color.white};
    cursor: pointer;
  }

  .blogpost__tag:focus {
    outline: 3px solid ${props => props.theme.color.outline};
  }
`;
