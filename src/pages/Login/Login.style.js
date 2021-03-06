import styled from 'styled-components';
import graduatedImg from '../../assets/img/graduated-login.webp';

export const FlexDiv = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const ImageBox = styled.div`
  background: url(${graduatedImg}) no-repeat;
  background-size: cover;
  background-position: center center;
  width: 40%;
  height: 100%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    max-height: 250px;
  }
`;

export const FormBox = styled.div`
  width: 60%;
  padding: 3em 5em;
  box-sizing: border-box;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
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
