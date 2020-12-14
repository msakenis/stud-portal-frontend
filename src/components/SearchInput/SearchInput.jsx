import React from 'react';
import * as S from './SearchInput.style';

function SearchInput({ handleChange }) {
  return (
    <S.InputDiv onKeyUp={handleChange}>
      <S.Icon className="fas fa-search"></S.Icon>
      <S.Input type="text" placeholder="Search..." />
    </S.InputDiv>
  );
}

export default SearchInput;
