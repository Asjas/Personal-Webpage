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
  letter-spacing: 0.03rem;
  margin-bottom: 5px;
`;

export const StyledField = styled(Field)`
  color: ${props => props.theme.black};
  border: ${props => props.theme.blackBorderMd};
  border-radius: 4px;
  height: 50px;
  font-size: 1rem;
  grid-column: 1/-1;
  grid-row: 2;
  padding: 0 0 0 20px;
  width: 100%;

  &:active {
    border: ${props => props.theme.goldBorderMd};
  }

  &:focus {
    border: ${props => props.theme.goldBorderMd};
  }
`;

export const StyledTextArea = styled(Field)`
  color: ${props => props.theme.black};
  border: ${props => props.theme.blackBorderMd};
  border-radius: 4px;
  font-size: 1rem;
  grid-column: 1/-1;
  grid-row: 2;
  min-height: 120px;
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
  letter-spacing: 0.03rem;
  margin-bottom: 5px;
  justify-self: end;
`;
