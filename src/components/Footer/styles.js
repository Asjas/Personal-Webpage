import styled from 'styled-components';
import { media } from '../../utils/media';

export const FooterStyled = styled.footer`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 0 0 10px;
  max-width: 400px;
  align-self: end;

  ${media.laptopL`
    max-width: 320px;
  `};
`;

export const SocialMediaIcon = styled.a`
  cursor: pointer;

  svg {
    fill: ${props => props.color};
    height: ${props => props.theme.svgL};
    width: ${props => props.theme.svgL};

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
    position: absolute;
    left: -9999px;
  }

  ${media.laptopL`
    svg {
      height: ${props => props.theme.svgMd};
      width: ${props => props.theme.svgMd};
    }
  `};
`;
