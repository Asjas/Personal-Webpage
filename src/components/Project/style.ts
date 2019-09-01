import styled from '../../utils/themed-styled-components';

export const Card = styled.article`
  border-radius: 2px;
  width: 100%;
  max-width: 800px;
  box-shadow: ${props => props.theme.color.card};
  transition: all 0.28s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Heading = styled.h2`
  font-size: ${props => props.theme.fontSize.heading2};
  font-weight: normal;
  padding: 8px 0 0 16px;
`;

export const Paragraph = styled.p`
  padding: 0 16px 8px 16px;
`;
