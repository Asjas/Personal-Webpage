import styled from '../../utils/themed-styled-components';

export const ErrorBoundary = styled.p`
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.color.error};
  width: 90%;
  text-align: center;
`;
