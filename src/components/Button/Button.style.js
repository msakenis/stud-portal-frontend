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
  padding: 1em 2em;
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
`;
