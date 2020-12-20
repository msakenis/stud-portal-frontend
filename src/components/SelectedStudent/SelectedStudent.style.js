import styled from 'styled-components';

export const StudentSpan = styled.p`
  padding: 0.2em 0.5em;
  margin: 0.1em 0.2em;
  border-radius: 20px;
  background-color: ${(props) => props.theme.primary.background};
  color: ${(props) => props.theme.primary.color};
  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 1.3em;
  }
`;
