import React from 'react';
import * as S from './Logo.style';
import LogoImg from '../../assets/img/Logo.png';

function Logo() {
  return <S.Logo src={LogoImg} alt="logo-codeop" />;
}

export default Logo;
