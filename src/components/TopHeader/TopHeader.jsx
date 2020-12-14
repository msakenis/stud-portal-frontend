import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';
import { SearchInput } from '../';
import * as S from './TopHeader.style';

function TopHeader({ addBtnTxt }) {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const linkTo = addBtnTxt ? 'add-' + addBtnTxt.toLowerCase() : '';
  return (
    <S.FlexDiv>
      <SearchInput />
      <div>
        {addBtnTxt && (
          <S.StyledLink to={linkTo}>+ ADD {addBtnTxt}</S.StyledLink>
        )}
      </div>
      <S.StyledButton
        onClick={() => {
          auth.clearLocalStorage();
          auth.updateToken();
          history.push('/login');
        }}
      >
        Log Out
      </S.StyledButton>
    </S.FlexDiv>
  );
}

export default TopHeader;
