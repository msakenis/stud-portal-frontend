import React, { useContext, useEffect, useState } from 'react';
import {
  MainWrapper,
  Loading,
  Notification,
  IconBtnsConfirm,
} from '../../components';
import { HighlightIdContext } from '../../contexts/HighlightId.context';
import * as S from './ViewStudents.style';
import { useHistory } from 'react-router-dom';

function deleteStudent(
  id,
  setError,
  setErrorMessage,
  setNotifType,
  error,
  token,
  setFilteredData,
  filteredData
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
        setFilteredData(filteredData.filter((item) => item.id !== id));
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
  const [filteredData, setFilteredData] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [notifType, setNotifType] = useState();
  const [displayBtns, setDisplayBtns] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState('');
  const history = useHistory();
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
        setFilteredData(data);
      });
  }, [token, selectedId]);

  return (
    <MainWrapper
      addBtnTxt={'STUDENT'}
      handleSearch={(e) => {
        setFilteredData(
          data.filter(
            (item) =>
              item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
              item.surname
                .toLowerCase()
                .includes(e.target.value.toLowerCase()) ||
              item.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
              item.phone.includes(e.target.value) ||
              (item.title &&
                item.title.toLowerCase().includes(e.target.value.toLowerCase()))
          )
        );
      }}
    >
      <S.TableBox>
        <S.Title>Students</S.Title>
        {error && notifType && (
          <Notification message={errorMessage} type={notifType} />
        )}
        {data ? (
          <S.FlexDiv>
            <S.Table>
              <thead>
                <tr>
                  <th>FULL NAME</th>
                  <th>PHONE</th>
                  <th>EMAIL</th>
                  <th>LAST MODIFIED</th>
                  <th>CURRENT COURSE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {filteredData &&
                  filteredData.map((row) => (
                    <tr key={row.id}>
                      <td>{row.name + ' ' + row.surname}</td>
                      <td>{row.phone}</td>
                      <td>{row.email}</td>
                      <td>{row.last_modified.slice(0, 10)}</td>
                      <td>{row.title ? row.title : 'Not Studing'}</td>
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
                              setFilteredData,
                              filteredData
                            )
                          }
                          handleClose={() => setDisplayBtns(false)}
                          handleEdit={() =>
                            history.push(`/edit-student/${row.id}`)
                          }
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </S.Table>
            {filteredData && (
              <S.StudentsCount>
                Total Students: {filteredData.length}
              </S.StudentsCount>
            )}
          </S.FlexDiv>
        ) : (
          <Loading />
        )}
      </S.TableBox>
    </MainWrapper>
  );
}

export default ViewStudents;
