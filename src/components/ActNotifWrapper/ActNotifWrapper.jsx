import React from 'react';
import * as S from './ActNotifWrapper.style';
import { ActivityNotification } from '../';
import { array } from 'prop-types';

function ActNotifWrapper({ activitiesArr }) {
  return (
    <S.WrapperDiv>
      <S.Title>Activities Notifications</S.Title>
      {activitiesArr.map((activity) => (
        <ActivityNotification
          key={activity.id}
          notifTitle={activity.notifTitle}
          dateString={activity.dateString}
          notifText={activity.notifText}
        />
      ))}
    </S.WrapperDiv>
  );
}
ActNotifWrapper.propTypes = {
  activitiesArr: array.isRequired,
};
export default ActNotifWrapper;
