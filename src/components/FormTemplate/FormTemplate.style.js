import styled from 'styled-components';

export const FormTitle = styled.h2`
  font-size: 2em;
  color: ${(props) => props.theme.primary.color};
  text-align: center;
`;

export const ButtonBox = styled.div`
  text-align: right;
`;

export const FormDiv = styled.div`
  width: 100%;
  background-color: #fff;
`;

export const FlexBox = styled.div`
  display: flex;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-wrap: wrap;
  }
  && div {
    margin: 0;
  }
  && :first-child {
    padding-right: 30px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      padding-right: 0;
      margin-bottom: 25px;
    }
  }
`;
