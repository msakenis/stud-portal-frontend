import React from 'react';
import * as S from './IconBtn.style';
function IconBtn({ className }) {
  return (
    <S.Button>
      <S.StyledIcon className={className}></S.StyledIcon>
    </S.Button>
  );
}

export default IconBtn;
