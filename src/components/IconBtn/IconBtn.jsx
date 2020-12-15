import React from 'react';
import * as S from './IconBtn.style';
function IconBtn({ className, handleClick }) {
  return (
    <S.Button onClick={handleClick}>
      <S.StyledIcon className={className}></S.StyledIcon>
    </S.Button>
  );
}

export default IconBtn;
