import styled from 'styled-components';

export const FormBox = styled.div`
  padding: 2em;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 70vh;
  @media (max-width: ${({ theme }) => theme.smallLaptop}) {
    padding: 1.2em;
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    max-height: 90vh;
  }
`;

export const InputBox = styled.div`
  padding: 1em 3em;
  background-color: #fff;
  border-radius: 5px;
  max-width: 100%;
  box-sizing: border-box;
  box-shadow: 1px 3px 3px 1px ${(props) => props.theme.primaryHover.background};
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 1.7em;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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
  margin-top: 5px;
  margin-bottom: 10px;
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
  && td:nth-child(2) {
    color: ${(props) => props.theme.secondary.color};
    font-weight: 500;
  }
  @media (max-width: ${({ theme }) => theme.smallLaptop}) {
    font-size: 1.2em;
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 1.2em;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.4em;
    && table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }
    && thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    && tr {
      border: 1px solid #ccc;
    }
    && td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50% !important;
    }
    && td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }
    && td:nth-of-type(1):before {
      content: 'ACTION';
    }
    && td:nth-of-type(2):before {
      content: 'FULL NAME';
    }
    && td:nth-of-type(3):before {
      content: 'PHONE';
    }
    && td:nth-of-type(4):before {
      content: 'EMAIL';
    }
  }
`;
export const Text = styled.p`
  color: ${(props) => props.theme.primary.color};
  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 1.4em;
  }
`;
