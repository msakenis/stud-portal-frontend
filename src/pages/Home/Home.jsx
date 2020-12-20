import React, { useContext, useEffect } from 'react';
import { MainWrapper, StatisticsCard, ActNotifWrapper } from '../../components';
import { HighlightIdContext } from '../../contexts/HighlightId.context';
import * as S from './Home.style';
import { statsArr } from '../../utils/statsInfo';
import { activitiesArr } from '../../utils/activities';

function Home() {
  const selectedId = useContext(HighlightIdContext);

  useEffect(() => {
    selectedId.setId(1);
  }, [selectedId]);

  return (
    <MainWrapper>
      <S.WrapperDiv>
        <S.FlexDiv>
          {statsArr.map((card) => (
            <StatisticsCard
              key={card.id}
              borderColor={card.borderColor}
              statName={card.statName}
              statNumber={card.statNumber}
              imgUrl={card.imgUrl}
            />
          ))}
        </S.FlexDiv>
        <S.ActivitiesDiv>
          <ActNotifWrapper activitiesArr={activitiesArr} />
        </S.ActivitiesDiv>
      </S.WrapperDiv>
    </MainWrapper>
  );
}

export default Home;
