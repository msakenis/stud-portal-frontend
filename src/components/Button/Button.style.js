import styled from 'styled-components';

export const Button = styled.button`
  background: linear-gradient(
    150deg,
    rgba(75, 131, 184, 0.9584034297312675) 14%,
    rgba(62, 108, 152, 1) 37%,
    rgba(47, 93, 135, 0.8743698162858894) 61%,
    rgba(23, 59, 92, 0.9107843821122199) 77%,
    rgba(19, 51, 80, 0.9135855025603992) 90%
  );
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0 2em;
  min-height: 3em;
  font-weight: 500;
  font-size: 1.1em;
  width: 40%;
  cursor: pointer;
  &&:hover {
    background: linear-gradient(
      150deg,
      rgba(94, 142, 187, 0.8099440459777661) 14%,
      rgba(91, 151, 207, 1) 36%,
      rgba(45, 108, 166, 0.8743698162858894) 56%,
      rgba(62, 119, 171, 0.9107843821122199) 69%,
      rgba(67, 133, 195, 0.9135855025603992) 97%
    );
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 60%;
    font-size: 1.4em;
  }
`;

export const LoadingSpan = styled.div`
  font-size: 0.8em;
  margin: 0 auto;
  text-indent: -9999em;
  width: 4em;
  height: 4em;
  border-radius: 50%;
  background: #ffffff;
  background: -moz-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: linear-gradient(
    to right,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  &&:before {
    width: 50%;
    height: 50%;
    background: #ffffff;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  &&:after {
    background: ${(props) => props.theme.secondary.color};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media (max-width: ${({ theme }) => theme.smallLaptop}) {
    width: 3em;
    height: 3em;
  }
`;
