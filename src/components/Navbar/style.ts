import styled from '../../utils/themed-styled-components';

export const Sidenav = styled.div`
  grid-area: sidenav;
  height: 100vh;
  left: 0;
  padding: 0;
  position: fixed;
  transform: translateX(0);
  transition: all ease-in-out 0.5s;
  width: 360px;
  z-index: 10;
  will-change: transform opacity;

  @media (max-width: ${props => props.theme.mobileQuery.laptopL}) {
    max-width: 300px;
  }

  @media (max-width: ${props => props.theme.mobileQuery.laptop}) {
    max-width: 300px;
    transform: translateX(-300px);
    opacity: 0;
  }

  @media (max-width: ${props => props.theme.mobileQuery.mobileL}) {
    max-width: 280px;
    transform: translateX(-280px);
    opacity: 0;
  }

  &.sidenav--show {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const HamburgerMenu = styled.a`
  cursor: pointer;
  display: block;
  height: 32px;
  position: fixed;
  right: 30px;
  top: 15px;
  width: 32px;
  z-index: 10;
  visibility: hidden;

  &:focus {
    outline: 3px solid ${props => props.theme.color.outline};
  }

  & span {
    position: absolute;
    left: -9999px;
  }

  @media (max-width: ${props => props.theme.mobileQuery.laptop}) {
    visibility: visible;
  }
`;

export const Navbar = styled.nav`
  background: ${props => props.theme.color.navbar};
  border-bottom: 3px solid ${props => props.theme.color.primary};
  border-top: 3px solid ${props => props.theme.color.primary};
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  height: 100vh;
  width: 100%;
`;

export const Image = styled.img`
  padding: 20px 0;
  width: 150px;
  height: auto;
  margin: 0 auto;
`;

export const NavbarLinks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: start;
  padding-left: 0;
  width: 100%;

  li {
    align-content: center;
    list-style: none;
    text-align: center;
    width: 100%;

    a {
      display: block;
      border: 2px solid transparent;
      color: ${props => props.theme.color.white};
      cursor: pointer;
      font-family: ${props => props.theme.font.retro};
      font-size: ${props => props.theme.fontSize.navbarLinkLarge};
      line-height: 5rem;
      width: 100%;
      padding: 3px 0;

      &:hover {
        color: ${props => props.theme.color.primary};
      }

      &:focus {
        border: 2px solid ${props => props.theme.color.primary};
        color: ${props => props.theme.color.primary};
        outline: none;
      }
    }

    & .navbar__link--active {
      color: ${props => props.theme.color.primary};
    }
  }
`;
