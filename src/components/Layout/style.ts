import styled from '../../utils/themed-styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 360px 1fr;
  grid-template-areas: 'sidenav main';

  @media (max-width: ${props => props.theme.mobileQuery.laptopL}) {
    grid-template-columns: 300px 1fr;
  }

  @media (max-width: ${props => props.theme.mobileQuery.laptop}) {
    grid-template-columns: 1fr;
    grid-template-areas: 'main';
  }
`;

export const Main = styled.main`
  grid-area: main;
  display: grid;
  grid-template-columns:
    minmax(1.8rem, 1fr)
    minmax(auto, 800px)
    minmax(1.8rem, 1fr);
  margin: 60px 0;

  & > * {
    grid-column: 2;
  }
`;
