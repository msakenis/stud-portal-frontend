import styled from 'styled-components';

export const InputDiv = styled.div`
  width: 40%;

  & i {
    position: absolute;
  }
`;

export const Icon = styled.i`
  padding: 12px;
  color: ${(props) => props.theme.primary.color};
  width: 10px;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 8px 8px 40px;
  font-size: 1em;
  font-weight: 400;
  border-radius: 50px;
  border: none;
  color: ${(props) => props.theme.primary.color};
  background-color: ${(props) => props.theme.primary.background};
  box-shadow: 1px 3px 3px 1px ${(props) => props.theme.primaryHover.background};
  &:focus {
    box-shadow: 0 0 3px 1px ${(props) => props.theme.secondaryHover.color};
  }
`;
