import React from 'react';
import * as S from './Notification.style';
import { Link } from 'react-router-dom';

function Notification({ message, type, loginNotif }) {
  return (
    <S.NotificationText type={type}>
      {loginNotif ? (
        <>
          {message} <Link to="/login"> here</Link>
        </>
      ) : (
        message
      )}
    </S.NotificationText>
  );
}

export default Notification;
