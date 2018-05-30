import styled from 'styled-components';
import Img from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { media } from '../../utils/media';

export const Content = styled.div`
  width: 550px;
  margin: 30px auto 0;

  ${media.large`
    width: 700px;
  `};

  ${media.medium`
    width: 550px;
  `};

  ${media.small`
    width: 420px;
  `};

  ${media.xSmall`
    width: 320px;
  `};
`;

export const Card = styled.div`
  color: rgba(0, 0, 0, 0.87);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  background: #fff;
  border-radius: 2px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  letter-spacing: 0.03rem;
  line-height: 2.6rem;
  padding: 1.6rem 0 0 1.6rem;

  ${media.small`
    font-size: 2rem;
    line-height: 2.2rem;
  `};

  ${media.xSmall`
    font-size: 1.8rem;
    line-height: 2rem;
  `};
`;

export const Description = styled.h2`
  font-size: 1.8rem;
  letter-spacing: 0.03rem;
  line-height: 2rem;
  padding: 1.6rem 0 0 1.6rem;

  ${media.small`
    font-size: 1.6rem;
    line-height: 1.8rem;
  `};

  ${media.xSmall`
    font-size: 1.4rem;
    line-height: 1.6rem;
  `};
`;

export const StyledImg = styled(Img)`
  height: auto;
  width: 540px;
  margin: 0 auto;

  ${media.large`
    width: 700px;
  `};

  ${media.medium`
    width: 550px;
  `};

  ${media.small`
    width: 420px;
  `};

  ${media.xSmall`
    width: 320px;
  `};
`;

export const LinkDescription = styled.p`
  font-size: 1.4rem;
  letter-spacing: 0.02rem;
  line-height: 1.6rem;
  padding: 0 0 1.6rem 1.6rem;

  ${media.small`
    font-size: 1.3rem;
    line-height: 1.5rem;
  `};

  ${media.xSmall`
    font-size: 1.1rem;
    line-height: 1.3rem;
  `};
`;

export const StyledLink = styled(OutboundLink)`
  color: #000;
  color: blue;
  cursor: pointer;
  font-size: 1.4rem;
  line-height: 1.6rem;
  padding-left: 5px;
  position: relative;
  text-decoration: none;

  &:hover {
    color: lightcoral;
  }

  &:focus {
    outline: 1px solid black;
  }

  ${media.small`
    font-size: 1.3rem;
    line-height: 1.5rem;
  `};

  ${media.xSmall`
    font-size: 1.1rem;
    line-height: 1.3rem;
  `};
`;
