import styled from 'styled-components';
import { media } from '../../utils/media';

export const Section = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-areas: 'aside main';
`;

export const Aside = styled.aside`
  grid-area: 'aside';
  width: 100%;
  height: 100%;
`;

export const Main = styled.main`
  grid-area: 'main';
  height: 100%;
`;
