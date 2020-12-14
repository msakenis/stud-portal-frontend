import styled from 'styled-components';

export const TableBox = styled.div`
  padding: 2em;
`;
export const Title = styled.h2`
  font-weight: 400;
  font-size: 1.7em;
`;

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  color: ${(props) => props.theme.primary.color};
  border-radius: 5px;
  width: 100%;
  text-align: left;
  table-layout: fixed;
  overflow: hidden;
  background-color: #fff;

  box-shadow: 1px 3px 3px 1px ${(props) => props.theme.primaryHover.background};
  && th {
    border-bottom: 1px solid #999;
    padding: 0.5em 1em;
  }
  && td {
    border-top: 1px solid #999;

    padding: 0.5em 1em;
    word-wrap: break-word;
  }
  && td:first-child {
    color: ${(props) => props.theme.secondary.color};
    font-weight: 500;
  }
`;
