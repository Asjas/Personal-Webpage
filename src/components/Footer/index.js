import React from 'react';
import { FooterStyled, Paragraph, StyledSocialIcon } from './styles.js';

const Footer = () => (
  <FooterStyled>
    <Paragraph>Made with love.</Paragraph>
    <div>
      <StyledSocialIcon url="https://twitter.com/asjasroos" />
      <StyledSocialIcon url="https://github.com/Asjas" />
      <StyledSocialIcon url="https://www.linkedin.com/in/asjasroos" />
      <StyledSocialIcon url="https://codepen.io/asjas" />
    </div>
  </FooterStyled>
);

export default Footer;
