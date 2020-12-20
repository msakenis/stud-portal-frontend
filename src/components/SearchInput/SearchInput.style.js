import styled from 'styled-components';

export const InputDiv = styled.div`
  width: 40%;

  & i {
    position: absolute;
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-left: 5em;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 4em;
    width: 30%;
    position: relative;
    top: -17px;
  }
`;

export const Icon = styled.i`
  padding: 12px;
  color: ${(props) => props.theme.primary.color};
  width: 10px;
  text-align: left;
  z-index: 2;
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
  transition: width 0.3s;
  outline: none;
  &:focus {
    box-shadow: 0 0 3px 1px ${(props) => props.theme.secondaryHover.color};
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 50%;
    z-index: 1;
    position: absolute;

    &&:focus {
      width: 140%;
    }
  }
`;
