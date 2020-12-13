import styled from 'styled-components';

export const NotificationText = styled.p`
  color: #fff;
  background-color: ${(props) =>
    props.type === 'error' ? '#ed7a6d' : '#98d380'};
  text-align: center;
  margin: 0;
  border-radius: 5px;
  padding: 0.5em 0.5em;
`;
