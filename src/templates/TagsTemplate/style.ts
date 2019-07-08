import styled from '../../utils/themed-styled-components';
import { Link } from 'gatsby';

export const Section = styled.section`
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 700px)
    minmax(1.2rem, 1fr);
  justify-items: center;
  gap: 30px 0;

  & > * {
    grid-column: 2;
  }
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  color: $primaryColor;
  width: 100%;
`;

export const ReturnLink = styled(Link)`
  background: $primaryColor;
  border-radius: 25px;
  color: $white;
  display: inline-block;
  font-family: Goldsmith;
  font-size: $fontSmall;
  margin: 20px 20px 0 0;
  padding: 3px 8px;
  justify-self: left;

  &:hover {
    background: $black;
    color: $white;
    cursor: pointer;
  }

  &:focus {
    outline: 3px solid $outlineColor;
  }
`;
