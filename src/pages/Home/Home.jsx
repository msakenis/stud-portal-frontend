import React, { useContext, useEffect } from 'react';
import { MainWrapper } from '../../components';
import { HighlightIdContext } from '../../contexts/HighlightId.context';

function Home() {
  const selectedId = useContext(HighlightIdContext);

  useEffect(() => {
    selectedId.setId(1);
  }, [selectedId]);

  return (
    <MainWrapper>
      <div>aaa</div>
    </MainWrapper>
  );
}

export default Home;
