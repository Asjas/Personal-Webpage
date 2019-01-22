import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { media } from '../../utils/media';

export const StyledForm = styled(Form)`
  border-radius: 4px;
  margin: 0 auto;
  padding: 25px 0;
  width: 480px;
`;

export const Fieldset = styled.fieldset`
  border-radius: 6px;
  border: ${props => props.theme.blackBorderSm};
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;

  &[disabled] {
    opacity: 0.5;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const LabelText = styled.span`
  color: ${props => props.theme.black};
  font-family: Abberwick;
  font-size: ${props => props.theme.fontMd};
  letter-spacing: 0.04rem;
  margin-bottom: 5px;
  width: 50%;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: ${props => props.theme.maroon};
  display: flex;
  font-family: Abberwick;
  font-size: ${props => props.theme.fontMd};
  justify-content: flex-end;
  letter-spacing: 0.03rem;
  margin-bottom: 5px;
  width: 50%;
`;

export const StyledField = styled(Field)`
  border-radius: 4px;
  border: ${props => props.theme.blackBorderMd};
  color: ${props => props.theme.black};
  font-family: Abberwick;
  font-size: ${props => props.theme.fontSm};
  height: 50px;
  letter-spacing: 0.02rem;
  margin: 0 0 30px 0;
  padding: 0 0 0 20px;
  width: 100%;

  &:active,
  &:focus {
    border: ${props => props.theme.goldBorderMd};
  }
`;

export const StyledTextArea = styled(Field)`
  border-radius: 4px;
  border: ${props => props.theme.blackBorderMd};
  color: ${props => props.theme.black};
  font-family: Abberwick;
  font-size: ${props => props.theme.fontSm};
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
