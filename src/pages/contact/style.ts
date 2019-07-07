import styled from '../../utils/themed-styled-components';

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  justify-content: flex-start;

  @media screen and(max-width: ${props => props.theme.mobileQuery.laptop}) {
    flex-direction: column;
  }

  @media screen and(max-width: ${props => props.theme.mobileQuery.tablet}) {
    width: 400px;
  }

  @media screen and(max-width: ${props => props.theme.mobileQuery.mobileL}) {
    width: 350px;
  }

  @media screen and(max-width: ${props => props.theme.mobileQuery.mobileM}) {
    width: 300px;
  }
`;

export const Heading = styled.h1`
  width: 100%;
  margin-bottom: 25px;
`;

export const Paragraph = styled.p`
  margin: 0 auto;
  font-size: ${props => props.theme.fontSize.large};
  padding: 10px 0;
  width: 100%;

  a {
    color: $black;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.color.primary};

    &:hover,
    &:focus {
      color: ${props => props.theme.color.primary};
      outline: 3px solid ${props => props.theme.color.outline};
    }

    &:visited {
      color: ${props => props.theme.color.linkVisited};
    }
  }
`;
