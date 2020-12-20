import React from 'react';
import * as S from './Button.style';
import { bool, func, string } from 'prop-types';

function Button({ children, handleClick, type, loading }) {
  return (
    <S.Button onClick={handleClick} type={type}>
      {loading ? <S.LoadingSpan></S.LoadingSpan> : children}
    </S.Button>
  );
}

Button.propTypes = {
  type: string,
  handleClick: func,
  loading: bool,
  children: string.isRequired,
};

export default Button;
