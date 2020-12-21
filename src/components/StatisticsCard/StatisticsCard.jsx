import React from 'react';
import * as S from './StatisticsCard.style';
import { string, number } from 'prop-types';

function StatisticsCard({ imgUrl, statName, statNumber, borderColor }) {
  return (
    <S.CardDiv borderColor={borderColor}>
      <S.ImgDiv>
        <S.Image src={imgUrl} width="105px" height="105px" alt={statName} />
      </S.ImgDiv>
      <S.StatsDiv>
        <S.StatTitle>{statName}</S.StatTitle>
        <S.StatNumb>{statNumber}</S.StatNumb>
      </S.StatsDiv>
    </S.CardDiv>
  );
}

StatisticsCard.propTypes = {
  imgUrl: string.isRequired,
  statName: string.isRequired,
  statNumber: number.isRequired,
  borderColor: string.isRequired,
};

export default StatisticsCard;
