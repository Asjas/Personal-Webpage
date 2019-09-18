import styled from '../../utils/themed-styled-components';

export const Form = styled.form`
  justify-self: center;
  padding: 25px 0;
  margin-top: 20px;
  width: 550px;
  height: 100%;

  @media (max-width: ${props => props.theme.mobileQuery.tablet}) {
    width: 400px;
  }

  @media ${props => props.theme.mobileQuery.mobileL} {
    width: 350px;
    padding: 0;
    margin: 0;
  }

  @media ${props => props.theme.mobileQuery.mobileM} {
    width: 300px;
  }
`;

export const Fieldset = styled.fieldset`
  border-radius: 6px;
  border: 2px solid ${props => props.theme.color.black};
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  & span {
    letter-spacing: 0.04rem;
    margin-bottom: 5px;
    width: 50%;
  }
`;

// export const StyledErrorMessage = styled(ErrorMessage)`
//   color: ${props => props.theme.errorColor};
//   display: flex;
//   font-family: Abberwick;
//   font-size: ${props => props.theme.fontMd};
//   justify-content: flex-end;
//   letter-spacing: 0.03rem;
//   margin-bottom: 5px;
//   width: 50%;
// `;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid ${props => props.theme.color.black};
  height: 50px;
  margin: 0 0 30px 0;
  padding: 0 0 0 20px;
  width: 100%;
`;

export const Textarea = styled.textarea`
  border-radius: 4px;
  border: 1px solid ${props => props.theme.color.black};
  margin: 0 0 30px 0;
  min-height: 120px;
  outline: none;
  padding: 20px;
  resize: vertical;
  width: 100%;
`;
