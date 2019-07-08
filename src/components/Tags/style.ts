import styled from '../../utils/themed-styled-components';
import { Link } from 'gatsby';

export const Section = styled.section`
  max-width: 500px;
  text-align: center;
  padding: 10px 20px 20px 20px;
  border-radius: 5px;
  box-shadow: ${props => props.theme.color.card};

  @media (max-width: ${props => props.theme.mobileQuery.mobileL}) {
    max-width: 400px;
  }
`;

export const Heading = styled.h2`
  margin: 10px 0 20px 0;
`;

export const TagLink = styled(Link)`
  background: ${props => props.theme.color.primary};
  border-radius: 25px;
  color: ${props => props.theme.color.white};
  display: inline-block;
  font-family: Goldsmith;
  font-size: ${props => props.theme.fontSize.small};
  padding: 3px 8px;
  margin: 5px 4px;
  font-style: italic;

  &:hover {
    background: ${props => props.theme.color.navbar};
    color: ${props => props.theme.color.white};
    cursor: pointer;
  }

  &:focus {
    outline: 3px solid ${props => props.theme.color.outline};
  }
`;
