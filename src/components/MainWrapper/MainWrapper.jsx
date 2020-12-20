import React from 'react';
import { HeaderBase, Wrapper, TopHeader } from '../';
import { func, string, oneOfType, array, object, element } from 'prop-types';

import * as S from './MainWrapper.style';

function MainWrapper({ backgroundImg, addBtnTxt, children, handleSearch }) {
  return (
    <Wrapper
      id="wrapper"
      backgroundImg={
        backgroundImg
          ? backgroundImg
          : 'https://wallpaperaccess.com/full/142585.jpg'
      }
    >
      <S.FlexDiv>
        <HeaderBase />
        <S.ContentBox>
          <TopHeader addBtnTxt={addBtnTxt} handleSearch={handleSearch} />
          {children}
        </S.ContentBox>
      </S.FlexDiv>
    </Wrapper>
  );
}

MainWrapper.propTypes = {
  backgroundImg: string,
  addBtnTxt: string,
  children: oneOfType([array, object, element]).isRequired,
  handleSearch: func,
};

export default MainWrapper;
