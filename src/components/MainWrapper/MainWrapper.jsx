import React from 'react';
import { HeaderBase, Wrapper, TopHeader } from '../';
import { func, string, element } from 'prop-types';

import * as S from './MainWrapper.style';

function MainWrapper({ backgroundImg, addBtnTxt, children, handleSearch }) {
  return (
    <Wrapper
      id="wrapper"
      backgroundImg={
        backgroundImg
          ? backgroundImg
          : 'https://pe-insights.com/wp-content/uploads/2020/08/Business-wallpaper1.jpg'
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
  children: element.isRequired,
  handleSearch: func,
};

export default MainWrapper;
