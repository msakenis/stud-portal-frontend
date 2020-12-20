import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
   font-size:16px;
   @media (max-width: ${({ theme }) => theme.smallLaptop}) {
    font-size:13px;
  }
   @media (max-width: ${({ theme }) => theme.bigTablet}) {
    font-size:11px;
  }
  }
`;

export default GlobalStyle;
