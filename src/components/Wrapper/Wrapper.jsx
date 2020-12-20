import React from 'react';
import * as S from './Wrapper.style';
import { element, string, bool } from 'prop-types';
function Wrapper({ children, backgroundImg, isBlur }) {
  return (
    <div>
      <S.Background backgroundImg={backgroundImg} isBlur={isBlur} />
      <S.MainBox>{children}</S.MainBox>
    </div>
  );
}

Wrapper.propTypes = {
  children: element.isRequired,
  backgroundImg: string,
  isBlur: bool,
};

export default Wrapper;
