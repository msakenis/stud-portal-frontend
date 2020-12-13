import React from 'react';
import * as S from './Wrapper.style';
function Wrapper({ children, backgroundImg, isBlur }) {
  return (
    <div>
      <S.Background backgroundImg={backgroundImg} isBlur={isBlur} />
      <S.MainBox>{children}</S.MainBox>
    </div>
  );
}

export default Wrapper;
