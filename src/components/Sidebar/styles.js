import styled from 'styled-components';
import { media } from '../../utils/media';

export const Aside = styled.section`
  width: 400px;
  height: 100vh;
  position: fixed;
  grid-area: aside;

  ${media.laptopL`
    max-width: 320px;
  `};
`;
