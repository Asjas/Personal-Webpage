import styled from 'styled-components';
import { media } from '../../utils/media';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-gap: 20px;
  grid-template-areas: 'aside main';

  ${media.laptopL`
    grid-template-columns: 320px 1fr;
  `};

  ${media.laptop`
    grid-template-columns: 1fr;
    grid-template-areas: 'main';
  `};
`;

export const Main = styled.main`
  grid-area: main;
`;
