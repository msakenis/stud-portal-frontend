import React from 'react';
import * as S from './IconBtn.style';
import { func, string } from 'prop-types';

function IconBtn({ className, handleClick, background }) {
  return (
    <S.Button background={background} type="button" onClick={handleClick}>
      <S.StyledIcon className={className}></S.StyledIcon>
    </S.Button>
  );
}

IconBtn.propTypes = {
  className: string.isRequired,
  handleClick: func.isRequired,
  background: string,
};
export default IconBtn;
