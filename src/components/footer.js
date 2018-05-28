import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';
import { media } from '../utils/media';

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;

  ${media.xSmall``};
`;

const Paragraph = styled.p`
  color: #000;
  font-size: 1.6rem;
  line-height: 1.8rem;

  ${media.small`
    font-size: 1.4rem;
    line-height: 1.6rem;
  `};

  ${media.xSmall``};
`;

const StyledSocialIcon = styled(SocialIcon)`
  margin: 0 10px 0 10px;

  ${media.small`
    height: 45px !important;
    width: 45px !important;
  `};
`;

const Footer = () => (
  <FooterStyled>
    <Paragraph>Made with love.</Paragraph>
    <div>
      <StyledSocialIcon url="https://twitter.com/asjasroos" />
      <StyledSocialIcon url="https://github.com/Asjas/" />
      <StyledSocialIcon url="https://www.linkedin.com/in/asjasroos/" />
    </div>
  </FooterStyled>
);

export default Footer;
