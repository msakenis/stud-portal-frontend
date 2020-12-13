import styled from 'styled-components';

export const FlexDiv = styled.div`
  display: flex;
  height: 100%;
`;

export const ImageBox = styled.div`
  background: url('https://www.wanrongyuanlin.com/wp-content/uploads/2017/02/Mark-Six.jpg')
    no-repeat fixed;
  background-size: cover;
  background-position: center center;
  width: 40%;
  height: 100%;
`;

export const FormBox = styled.div`
  width: 60%;
  padding: 3em 5em;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-weight: 500;
  letter-spacing: 1px;
  padding-top: 1em;
  margin: 0;
`;

export const TextBox = styled.h3`
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => props.theme.primary.color};
  padding-top: 2em;
  letter-spacing: 1px;
  margin: 0;
`;

export const ColorSpan = styled.span`
  color: ${(props) => props.theme.secondary.color};
`;
export const Line = styled.span`
  height: 3px;
  width: 20%;

  &&:first-child {
    margin-right: 15px;
    background: ${(props) => props.theme.secondary.color};
  }
  &&:last-child {
    background: ${(props) => props.theme.primary.background};
  }
`;

export const LinesDiv = styled.div`
  display: flex;
  padding: 2em 0;
`;

export const LinksBox = styled.div`
  padding-top: 2em;
`;

export const TextSpan = styled.span`
  color: ${(props) => props.theme.primary.color};
  margin-right: 20px;
`;

export const Links = styled.a`
  color: ${(props) => props.theme.secondary.color};
  text-decoration: none;
  &&:not(:last-child) {
    padding-right: 1em;
  }
  &&:hover {
    text-decoration: underline;
  }
`;
