import React from 'react';
import * as S from './Button.style';
function Button({ children, handleClick, type }) {
  return (
    <S.Button onClick={handleClick} type={type}>
      {children}
    </S.Button>
  );
}

export default Button;
