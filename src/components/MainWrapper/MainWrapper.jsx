import React from 'react';
import { HeaderBase, Wrapper, FlexDiv, TopHeader } from '../';

import * as S from './MainWrapper.style';

function MainWrapper({ backgroundImg, addBtnTxt, children }) {
  return (
    <Wrapper
      backgroundImg={
        backgroundImg
          ? backgroundImg
          : 'https://pe-insights.com/wp-content/uploads/2020/08/Business-wallpaper1.jpg'
      }
    >
      <FlexDiv>
        <HeaderBase />
        <S.ContentBox>
          <TopHeader addBtnTxt={addBtnTxt} />
          {children}
        </S.ContentBox>
      </FlexDiv>
    </Wrapper>
  );
}

export default MainWrapper;
