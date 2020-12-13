import React from 'react';
import * as S from './Logo.style';
import { useHistory } from 'react-router-dom';

function Logo() {
  const history = useHistory();

  return (
    <S.Logo
      onClick={() => history.push('/')}
      src="https://codeop.tech/wp-content/uploads/2019/05/CodeOp-Logo-Primary.png"
      alt="logo-codeop"
    />
  );
}

export default Logo;
