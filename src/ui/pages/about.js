import styled from 'styled-components';
import Img from 'gatsby-image';
import { media } from '../../utils/media';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  overflow: hidden;

  ${media.small`
      min-height: 40vh;
      max-width: 768px;
  `};
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 330px;
  z-index: 2;

  ${media.small`
    width: 220px;
  `};
`;

export const Heading = styled.h1`
  font-size: 2.8rem;
  letter-spacing: 0.03rem;
  line-height: 3rem;
  position: relative;
  right: 45px;
  top: 65px;
  transform: rotate(-6deg);

  ${media.small`
    font-size: 2.4rem;
    line-height: 2.4rem;
    right: 32px;
    top: 75px;
  `};
`;

export const Paragraph1 = styled.p`
  font-size: 1.9rem;
  letter-spacing: 0.02rem;
  margin-bottom: 30px;
  position: relative;
  right: 37px;
  top: 90px;
  transform: rotate(-6deg);

  ${media.small`
    font-size: 1.7rem;
    right: 26px;
    top: 80px;
  `};
`;

export const Paragraph2 = styled.p`
  font-size: 1.9rem;
  letter-spacing: 0.02rem;
  position: relative;
  right: 30px;
  top: 90px;
  transform: rotate(-6deg);

  ${media.small`
    font-size: 1.7rem;
    right: 22px;
    top: 60px;
  `};
`;

export const Paragraph3 = styled.p`
  font-size: 1.9rem;
  letter-spacing: 0.02rem;
  position: relative;
  right: 22px;
  top: 90px;
  transform: rotate(-6deg);

  ${media.small`
    font-size: 1.7rem;
    right: 15px;
    top: 70px;
  `};
`;

export const StyledImg = styled(Img)`
  height: auto;
  margin-top: 10px;
  width: 1200px;

  ${media.medium`
    height: auto;
    width: 1024px;
  `};

  ${media.small`
    height: auto;
    width: 768px;
  `};
`;
