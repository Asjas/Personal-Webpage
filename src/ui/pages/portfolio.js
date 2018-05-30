import styled from 'styled-components';
import { media } from '../../utils/media';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  max-width: 1200px;
  margin: 0 auto;

  ${media.large`
    grid-template-columns: 1fr;
  `};
`;
