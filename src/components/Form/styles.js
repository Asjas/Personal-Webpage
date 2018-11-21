import styled, { keyframes } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { media } from '../../utils/media';

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

export const StyledForm = styled(Form)`
  width: 500px;
  margin: 0 auto;
  align-self: center;
`;

export const Fieldset = styled.fieldset`
  display: grid;
  grid-gap: 30px;
  width: 100%;

  &[disabled] {
    opacity: 0.5;
  }
`;

export const Label = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;

export const LabelText = styled.span`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontMd};
  letter-spacing: 0.02rem;
  margin-bottom: 5px;
`;

export const StyledField = styled(Field)`
  border-radius: 4px;
  border: ${props => props.theme.blackBorderMd};
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontMd};
  grid-column: 1/-1;
  grid-row: 2;
  height: 50px;
  letter-spacing: 0.02rem;
  padding: 0 0 0 20px;
  width: 100%;

  &:active {
    border: ${props => props.theme.goldBorderMd};
  }

  &:focus {
    border: ${props => props.theme.goldBorderMd};
    outline: none;
  }
`;

export const StyledTextArea = styled(Field)`
  border-radius: 4px;
  border: ${props => props.theme.blackBorderMd};
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontMd};
  grid-column: 1/-1;
  grid-row: 2;
  letter-spacing: 0.02rem;
  min-height: 120px;
  outline: none;
  padding: 20px;
  resize: vertical;
  width: 100%;

  &:active {
    border: ${props => props.theme.goldBorderMd};
  }

  &:focus {
    border: ${props => props.theme.goldBorderMd};
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: ${props => props.theme.red};
  font-size: ${props => props.theme.fontMd};
  letter-spacing: 0.03rem;
  margin-bottom: 5px;
  justify-self: end;
`;
