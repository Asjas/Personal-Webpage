import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../../../utils/media';

export const Navigation = styled.nav`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  max-width: 1200px;
  padding: 7px 0;
  position: relative;
  width: 100%;

  ${media.medium`
    max-width: 900px;
  `};
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 5px 0 0;
  width: 460px;

  ${media.medium`
    display: none;
  `};
`;

export const StyledLink = styled(Link)`
  & {
    color: #000;
    cursor: pointer;
    font-size: 2rem;
    letter-spacing: 0.03rem;
    line-height: 2.2rem;
    padding: 3px;
    position: relative;
    text-decoration: none;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2);

    &:before {
      background-color: #000;
      bottom: 0;
      content: '';
      height: 2px;
      left: 0;
      outline: 0;
      position: absolute;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
      visibility: hidden;
      width: 100%;
    }

    &:hover:before {
      transform: scaleX(1);
      visibility: visible;
    }

    &:focus:before {
      outline: 0;
    }
  }

  ${media.medium`
    & {
      font-size: 1.9rem;
      line-height: 2.1rem;
    }
  `};

  ${media.small`
    & {
      font-size: 1.8rem;
      line-height: 2rem;
    }
  `};

  ${media.xSmall``};
`;
