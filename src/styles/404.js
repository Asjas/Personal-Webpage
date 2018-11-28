import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../utils/media';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 65vh;
`;

export const Heading = styled.h1`
  font-size: 4rem;
  line-height: 4.2rem;
`;

export const Paragraph = styled.p`
  font-size: 2.5rem;
  line-height: 2.7rem;
`;

export const StyledLink = styled(Link)`
  font-size: 1.8rem;
  line-height: 2rem;
  text-decoration: none;
  color: darkblue;
  padding: 3px;
  &:hover {
    color: lightcoral;
  }
  &:focus {
    outline: 1px solid darkblue;
  }
`;
