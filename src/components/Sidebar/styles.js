import styled from 'styled-components';
import { media } from '../../utils/media';

export const Aside = styled.section`
  width: 400px;
  height: 100vh;
  position: fixed;
  grid-area: aside;
  transform: translateX(0);

  ${media.laptopL`
    max-width: 320px;
  `};

  ${media.laptop`
    transform: translateX(-320px);
  `};
`;
