import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { media } from '../../utils/media';

export const StyledForm = styled(Form)`
  margin: 0 auto;
  padding: 25px 0;
  width: 500px;
  border-radius: 4px;
`;

export const Fieldset = styled.fieldset`
  display: grid;
  width: 100%;
  padding: 20px;
  border: ${props => props.theme.blackBorderSm};
  border-radius: 6px;

  &[disabled] {
    opacity: 0.5;
  }
`;

export const Label = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const LabelText = styled.span`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontMd};
  font-family: Abberwick;
  letter-spacing: 0.04rem;
  margin-bottom: 5px;
`;

export const StyledField = styled(Field)`
  border-radius: 4px;
  border: ${props => props.theme.blackBorderMd};
  color: ${props => props.theme.black};
  font-family: Abberwick;
  font-size: ${props => props.theme.fontSm};
  grid-column: 1/-1;
  grid-row: 2;
  height: 50px;
  letter-spacing: 0.02rem;
  margin: 0 0 30px 0;
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
  font-family: Abberwick;
  font-size: ${props => props.theme.fontSm};
  grid-column: 1/-1;
  grid-row: 2;
  letter-spacing: 0.04rem;
  margin: 0 0 30px 0;
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
  color: ${props => props.theme.maroon};
  font-size: ${props => props.theme.fontMd};
  font-family: Abberwick;
  letter-spacing: 0.03rem;
  margin-bottom: 5px;
  justify-self: end;
`;
