import styled from '../../utils/themed-styled-components';

export const Button = styled.button`
  background-color: ${props => props.theme.color.primary};
  border-radius: 4px;
  border: 2px solid ${props => props.theme.color.primary};
  color: ${props => props.theme.color.white};
  cursor: pointer;
  font-family: ${props => props.theme.font.retro};
  font-size: ${props => props.theme.fontSize.heading4};
  outline: 0;
  text-transform: capitalize;
  height: 40px;
  width: 100%;
  transition: all ease-in 0.12s;

  &:hover {
    background-color: ${props => props.theme.color.white};
    color: ${props => props.theme.color.primary};
    border: 2px solid ${props => props.theme.color.primary};
  }

  &:focus {
    outline: 3px solid ${props => props.theme.color.outline};
  }
`;
