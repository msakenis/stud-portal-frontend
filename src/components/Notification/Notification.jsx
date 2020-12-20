import React from 'react';
import * as S from './Notification.style';
import { string } from 'prop-types';

function Notification({ message, type }) {
  return <S.NotificationText type={type}>{message}</S.NotificationText>;
}
Notification.propTypes = {
  message: string.isRequired,
  type: string,
};
export default Notification;
