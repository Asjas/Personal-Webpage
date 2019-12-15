import styled from '../../utils/themed-styled-components';

export const Footer = styled.footer`
  display: flex;
  margin: 0 auto 10px 0;
  justify-content: space-around;
  width: 100%;
  align-self: end;

  @media (max-width: ${props => props.theme.mobileQuery.tablet}) {
    align-self: start;
  }

  a {
    margin-top: 1rem;

    .sr-only {
      border: 0;
      clip: rect(0 0 0 0);
      height: auto;
      margin: 0;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
      white-space: nowrap;
    }

    svg {
      fill: ${props => props.theme.color.white};
      height: 4.6rem;
      width: 4.6rem;
    }

    &:focus {
      outline: 3px solid ${props => props.theme.color.outline};

      svg > * {
        fill: ${props => props.theme.color.primary};
      }
    }

    &:hover {
      svg > * {
        fill: ${props => props.theme.color.primary};
      }
    }
  }
`;
