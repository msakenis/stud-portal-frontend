import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';
import { SearchInput } from '../';
import * as S from './TopHeader.style';
import { func, string } from 'prop-types';

function TopHeader({ addBtnTxt, handleSearch }) {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const linkTo = addBtnTxt ? 'add-' + addBtnTxt.toLowerCase() : '';
  return (
    <S.FlexDiv>
      <SearchInput handleChange={handleSearch} />
      <div>
        {addBtnTxt && (
          <S.StyledLink to={linkTo}>+ ADD {addBtnTxt}</S.StyledLink>
        )}
      </div>
      <S.StyledButton
        aria-label="log-out"
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
TopHeader.propTypes = {
  handleSearch: func,
  addBtnTxt: string,
};
export default TopHeader;
