import styled from 'styled-components';
import { media } from '../../utils/media';

export const Section = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-gap: 20px;
  grid-template-areas: 'aside main';

  ${media.laptopL`
    grid-template-columns: 320px 1fr;
  `};
`;

export const Aside = styled.aside`
  width: 400px;
  position: fixed;
  grid-area: aside;

  ${media.laptopL`
    max-width: 320px;
  `};
`;

export const Main = styled.main`
  grid-area: main;
`;
