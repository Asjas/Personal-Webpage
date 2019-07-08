import styled from '../../utils/themed-styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  background: ${props => props.theme.color.secondary};
  border-radius: 5px;
  align-self: center;
`;

export const Form = styled.form`
  padding: 20px;
  max-width: 500px;

  @media (max-width: ${props => props.theme.mobileQuery.tablet}) {
    max-width: 380px;
  }

  @media (max-width: ${props => props.theme.mobileQuery.mobileL}) {
    max-width: 320px;
  }

  @media (max-width: ${props => props.theme.mobileQuery.mobileS}) {
    max-width: 300px;
  }
`;

export const Heading = styled.h3`
  margin: 20px 0;
  text-align: center;

  @media (max-width: ${props => props.theme.mobileQuery.mobileL}) {
    text-align: left;
  }
`;

export const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSize.small};
`;

export const Input = styled.input`
  font-size: ${props => props.theme.fontSize.small};
`;
