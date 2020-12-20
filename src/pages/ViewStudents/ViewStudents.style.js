import styled from 'styled-components';

export const TableBox = styled.div`
  padding: 2em;
  box-sizing: border-box;
  max-height: 75vh;
  overflow-y: auto;
  @media (max-width: ${({ theme }) => theme.smallLaptop}) {
    padding: 1.2em;
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    max-height: 88vh;
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
      content: 'FULL NAME';
    }
    && td:nth-of-type(2):before {
      content: 'PHONE';
    }
    && td:nth-of-type(3):before {
      content: 'EMAIL';
    }
    && td:nth-of-type(4):before {
      content: 'LAST MODIFIED';
    }
    && td:nth-of-type(5):before {
      content: 'CURRENT COURSE';
    }
    && td:nth-of-type(6):before {
      content: 'ACTION';
    }
  }
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
  margin-top: 5px;

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

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const StudentsCount = styled.div`
  position: absolute;
  bottom: 5%;
  color: ${(props) => props.theme.primary.color};
  font-size: 0.9em;
  font-weight: 500;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    bottom: 2%;
  }
`;
