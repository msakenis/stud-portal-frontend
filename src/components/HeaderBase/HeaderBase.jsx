import React from 'react';
import * as S from './HeaderBase.style';
import logoImg from '../../assets/img/React-logo-1.png';
function HeaderBase() {
  return (
    <S.Header>
      <S.Logo src={logoImg} alt="logo" />
      <S.Actions>
        <S.StyledLink to="/">Home</S.StyledLink>
        <S.StyledLink to="/about">About</S.StyledLink>
      </S.Actions>
    </S.Header>
  );
}

export default HeaderBase;
