import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styled from '../../utils/themed-styled-components';

export const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Image = styled(Img)`
  width: 100%;
  max-width: 480px;
  height: auto;
`;

export const Heading = styled.h1`
  margin: 40px 0 20px 0;
`;

export const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSize.large};
  width: 90%;
`;

export const AnchorLink = styled(Link)`
  margin-top: 15px;
  padding: 3px;
  font-size: ${props => props.theme.fontSize.large};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.primary};
    text-decoration: underline;
  }
`;
