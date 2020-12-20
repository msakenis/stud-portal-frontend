import styled from 'styled-components';

export const CardDiv = styled.div`
  width: calc(25% - 24px);
  min-width: 200px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 1.2em 0;
  box-sizing: border-box;

  margin-top: 1em;
  border-radius: 7px;
  border-left: 7px solid ${(props) => props.borderColor};
  &&:not(:last-child) {
    margin-right: 2em;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    margin-right: 0;
  }
`;

export const Image = styled.img`
  width: 80%;
`;

export const ImgDiv = styled.div`
  text-align: center;
  width: 50%;
  padding: 1em;
  box-sizing: border-box;
`;
export const StatsDiv = styled.div`
  text-align: center;
  width: 50%;
  border-left: 2px solid ${({ theme }) => theme.secondary.background};
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StatTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.primary.color};
  text-align: center;
`;
export const StatNumb = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.primary.color};
  font-size: 1.5em;
  font-weight: 500;
`;
