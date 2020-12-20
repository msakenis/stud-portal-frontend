import React from 'react';
import * as S from './ActivityNotification.style';
import { string } from 'prop-types';

function ActivityNotification({ notifTitle, dateString, notifText }) {
  return (
    <S.NotifDiv>
      <S.NotifTitle>{notifTitle}</S.NotifTitle>
      <S.DateString>{dateString}</S.DateString>
      <S.NotifText>{notifText}</S.NotifText>
    </S.NotifDiv>
  );
}
ActivityNotification.propTypes = {
  notifTitle: string.isRequired,
  dateString: string.isRequired,
  notifText: string.isRequired,
};
export default ActivityNotification;
