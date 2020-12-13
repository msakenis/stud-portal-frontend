import React, { useContext } from 'react';
import { HeaderBase, Wrapper, FlexDiv } from '../../components';
import { HighlightIdContext } from '../../contexts/HighlightId.context';

function Home() {
  const selectedId = useContext(HighlightIdContext);
  selectedId.setId(1);

  return (
    <Wrapper
      backgroundImg={
        'https://pe-insights.com/wp-content/uploads/2020/08/Business-wallpaper1.jpg'
      }
    >
      <FlexDiv>
        <HeaderBase />
        <h1>Content</h1>
      </FlexDiv>
    </Wrapper>
  );
}

export default Home;
