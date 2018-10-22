import styled from 'styled-components';
import { media } from '../../utils/media';

export const FooterStyled = styled.footer`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  width: 100%;

  ${media.xSmall``};
`;

export const SocialMediaIcon = styled.a`
  cursor: pointer;
  height: ${props => props.theme.svgL};
  width: ${props => props.theme.svgL};
  display: block;
  padding: 10px 10px;
  margin: 15px 0;

  svg {
    fill: ${props => props.color};

    &:hover {
      fill: ${props => props.theme.gold};
    }
  }

  &:focus {
    svg {
      fill: ${props => props.theme.gold};
    }
  }

  span {
    display: none;
  }

  ${media.small``};
`;
