import Menu from 'react-burger-menu/lib/menus/slide';
import styled from 'styled-components';
import Link from 'next/link';
import { media } from '../../utils/media';
import '../../styles/ResponsiveNav.css';

export const ResponsiveNavMenu = styled(Menu)`
  display: none;

  ${media.medium`
    display: block;
  `};
`;

export const ResponsiveStyledLink = styled(Link)`
  color: #bdc3c7;
  cursor: pointer;
  font-size: 2.2rem;
  letter-spacing: 0.03rem;
  line-height: 1.5rem;
  padding: 10px;
  margin: 10px 0 10px 0;
  position: relative;
  text-decoration: none;

  ${media.small`
    font-size: 1.8rem;
    line-height: 1.9rem;
  `};
`;
