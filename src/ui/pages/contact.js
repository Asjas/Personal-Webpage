import styled from 'styled-components';
import Img from 'gatsby-image';
import { media } from '../../utils/media';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  letter-spacing: 0.04rem;
  margin: 0 auto;
  max-width: 1200px;
  overflow: hidden;

  ${media.small`
      max-width: 768px;
  `};
`;

export const StyledImg = styled(Img)`
  height: auto;
  margin-top: 10px;
  width: 1200px;
  z-index: -4;
`;
