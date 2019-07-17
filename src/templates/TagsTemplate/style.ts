import styled from '../../utils/themed-styled-components';
import { Link } from 'gatsby';

export const Section = styled.section`
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 700px)
    minmax(1.2rem, 1fr);
  justify-items: center;
  gap: 40px 0;

  & > * {
    grid-column: 2;
  }
`;

export const Heading = styled.h1`
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
    background: ${props => props.theme.color.black};
    color: ${props => props.theme.color.white};
    cursor: pointer;
  }

  &:focus {
    outline: 3px solid ${props => props.theme.color.outline};
  }
`;
