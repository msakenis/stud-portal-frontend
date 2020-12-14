import styled from 'styled-components';

export const Title = styled.h1`
  text-align: left;
`;

export const ContentBox = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.primary.background};
`;
