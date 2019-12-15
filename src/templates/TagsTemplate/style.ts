import styled from '../../utils/themed-styled-components';
import { Link } from 'gatsby';

export const Heading = styled.h1`
  font-size: ${props => props.theme.fontSize.heading1};
  text-align: center;
  margin-bottom: 30px;

  @media screen and (max-width: ${props => props.theme.mobileQuery.tablet}) {
    width: 90%;
  }
`;

export const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSize.xLarge};
  text-align: center;
`;

export const List = styled.ul`
  color: ${props => props.theme.color.primary};
  display: grid;
  gap: 40px 0;
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

export const ReturnLink = styled(Link)`
  background: ${props => props.theme.color.primary};
  border-radius: 25px;
  color: ${props => props.theme.color.white};
  display: inline-block;
  font-family: ${props => props.theme.font.body};
  font-size: ${props => props.theme.fontSize.small};
  margin: 20px 20px 0 0;
  padding: 3px 8px;
  justify-self: left;

  &:hover {
    background: ${props => props.theme.color.navbar};
    color: ${props => props.theme.color.white};
  }

  &:focus {
    background: ${props => props.theme.color.navbar};
    color: ${props => props.theme.color.white};
    outline: 3px solid ${props => props.theme.color.outline};
  }

  &:visited {
    color: ${props => props.theme.color.white};
  }
`;
