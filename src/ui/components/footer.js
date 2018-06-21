import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';
import { media } from '../../utils/media';

export const FooterStyled = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: center;
  letter-spacing: 0.04rem;
  width: 100%;

  ${media.xSmall``};
`;

export const Paragraph = styled.p`
  color: #000;
  font-size: 1.6rem;
  line-height: 1.8rem;

  ${media.small`
    font-size: 1.4rem;
    line-height: 1.6rem;
  `};

  ${media.xSmall``};
`;

export const StyledSocialIcon = styled(SocialIcon)`
  margin: 0 10px 0 10px;

  ${media.small`
    height: 45px !important;
    width: 45px !important;
  `};
`;
