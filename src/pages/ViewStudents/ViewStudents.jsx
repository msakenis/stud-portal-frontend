import React, { useContext, useEffect, useState } from 'react';
import {
  MainWrapper,
  Loading,
  Notification,
  IconBtnsConfirm,
} from '../../components';
import { HighlightIdContext } from '../../contexts/HighlightId.context';
import * as S from './ViewStudents.style';

function deleteStudent(
  id,
  setError,
  setErrorMessage,
  setNotifType,
  error,
  token,
  setData,
  data
) {
  error = false;
  fetch(`${process.env.REACT_APP_SERVER_URL}/DeleteStudent`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({ id: id }),
  })
    .then((res) => {
      if (res.ok) {
        setData(data.filter((item) => item.id !== id));
      } else {
        error = true;
        setNotifType('error');
      }
      return res.json();
    })
    .then((data) => {
      setError(true);
      setErrorMessage(data.msg || 'Error!');
    })
    .catch((err) => {
      setError(true);
      setNotifType('error');
      setErrorMessage(err.message);
    });
}

function ViewStudents() {
  const selectedId = useContext(HighlightIdContext);
  const token = localStorage.getItem('token');
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [notifType, setNotifType] = useState();
  const [displayBtns, setDisplayBtns] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState('');

  useEffect(() => {
    selectedId.setId(3);
    fetch(`${process.env.REACT_APP_SERVER_URL}/students`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [token, selectedId]);

  return (
    <MainWrapper
      backgroundImg={
        'https://pe-insights.com/wp-content/uploads/2020/08/Business-wallpaper1.jpg'
      }
      addBtnTxt={'STUDENT'}
    >
      <S.TableBox>
        <S.Title>Students</S.Title>
        {error && notifType && (
          <Notification message={errorMessage} type={notifType} />
        )}
        {data ? (
          <S.Table>
            <thead>
              <tr>
                <th>FULL NAME</th>
                <th>PHONE</th>
                <th>EMAIL</th>
                <th>LAST MODIFIED</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((row) => (
                  <tr key={row.id}>
                    <td>{row.name + ' ' + row.surname}</td>
                    <td>{row.phone}</td>
                    <td>{row.email}</td>
                    <td>{row.last_modified.slice(0, 10)}</td>
                    <td>
                      <IconBtnsConfirm
                        id={row.id}
                        displayBtns={displayBtns}
                        selectedId={selectedIcon}
                        handleClick={() => {
                          setDisplayBtns(true);
                          setSelectedIcon(row.id);
                        }}
                        handleConfirm={() =>
                          deleteStudent(
                            selectedIcon,
                            setError,
                            setErrorMessage,
                            setNotifType,
                            error,
                            token,
                            setData,
                            data
                          )
                        }
                        handleClose={() => setDisplayBtns(false)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </S.Table>
        ) : (
          <Loading />
        )}
      </S.TableBox>
    </MainWrapper>
  );
}

export default ViewStudents;
