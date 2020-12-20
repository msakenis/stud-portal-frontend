import styled from 'styled-components';

export const Background = styled.div`
  background: url(${(props) => props.backgroundImg}) no-repeat fixed;

  background-size: cover;
  background-position: center center;

  ${(props) => (props.isBlur ? 'filter: blur(6px);' : 'filter:none;')};

  height: 100vh;
  box-sizing: border-box;
`;

export const MainBox = styled.div`
  width: 90%;
  background-color: #fff;
  height: 90%;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  overflow: hidden;
  opacity: 0.9;
  @media (max-width: ${({ theme }) => theme.smallLaptop}) {
    height: 92%;
    width: 92%;
  }
  @media (max-width: ${({ theme }) => theme.bigTablet}) {
    height: 92%;
    width: 95%;
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    height: 100%;
    width: 100%;
  }
`;
