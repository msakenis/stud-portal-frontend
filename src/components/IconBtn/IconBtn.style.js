import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px;
  background-color: #fff;
  border: none;
  &&:hover i {
    color: ${(props) => props.theme.secondaryHover.color};
    cursor: pointer;
  }
`;

export const StyledIcon = styled.i`
  color: ${(props) => props.theme.primary.color};
`;
