import styled from 'styled-components';

export const FormBox = styled.div`
  padding: 2em;
`;

export const InputBox = styled.div`
  padding: 1em 3em;
  background-color: #fff;
  border-radius: 5px;
  max-width: 70%;
  box-sizing: border-box;
  box-shadow: 1px 3px 3px 1px ${(props) => props.theme.primaryHover.background};
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 1.7em;
`;
