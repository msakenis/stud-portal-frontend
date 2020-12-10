import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.primary.background
      : props.theme.secondary.background};
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.primary.color
      : props.theme.secondary.color};
  border: none;
  border-radius: 5px;
  padding: 0.5em 2em;
  cursor: pointer;
  &&:hover {
    color: ${(props) =>
      props.color === 'primary'
        ? props.theme.primaryHover.color
        : props.theme.secondaryHover.color};
    background: ${(props) =>
      props.color === 'primary'
        ? props.theme.primaryHover.background
        : props.theme.secondaryHover.background};
  }
`;
