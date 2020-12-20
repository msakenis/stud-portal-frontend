import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px;
  background: ${(props) =>
    props.background ? props.theme.primary.background : '#fff'};
  border: none;
  &&:hover i {
    color: ${(props) => props.theme.secondaryHover.color};
    cursor: pointer;
  }
`;

export const StyledIcon = styled.i`
  color: ${(props) => props.theme.primary.color};
  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 1.5em;
  }
`;
