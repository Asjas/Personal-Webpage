import Img from 'gatsby-image';
import styled from '../../utils/themed-styled-components';

export const Section = styled.section`
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Paragraph = styled.p`
  max-width: 600px;
  text-align: center;
  font-family: ${props => props.theme.font.handwriting};
  font-size: ${props => props.theme.fontSize.heading2};
  color: ${props => props.theme.color.primary};

  @media screen and (max-width: ${props => props.theme.mobileQuery.tablet}) {
    width: 90%;
  }
`;

export const Image = styled(Img)`
  width: 100%;
  max-width: 540px;
  height: auto;
`;
