import styled from 'styled-components';

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  margin: 25px 0;
  && input:focus ~ label,
  input:valid ~ label,
  textarea:focus ~ label,
  textarea:valid ~ label {
    top: -20px;
    font-size: 16px;
    opacity: 1;
    padding: 0;
    padding-left: 8px;
  }
`;
export const Label = styled.label`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 15px;
  font-weight: 500;
  color: ${(props) => props.theme.primary.color};
  padding: 20px 50px;
  margin-bottom: 10px;
  width: 100%;
  transition: all 0.5s ease-in-out;
  cursor: text;
  opacity: 0.5;
`;

export const InputField = styled.input`
  background-color: unset;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 1em 3em;
  font-size: 16px;
  border-radius: 5px;
  outline: none;
  color: ${(props) => props.theme.primary.color};

  border: 2px solid ${(props) => props.theme.primary.background};
  &&:focus {
    border: 2px solid ${(props) => props.theme.secondary.background};
    outline: none;
  }
`;

export const Icon = styled.i`
  left: 20px;
  top: 20px;
  position: absolute;
  z-index: 1;
  color: ${(props) => props.theme.secondary.color};
  opacity: 0.8;
  width: 20px;
`;
