import React, { useContext, useEffect, useState } from 'react';
import {
  MainWrapper,
  Loading,
  Notification,
  IconBtnsConfirm,
} from '../../components';
import { HighlightIdContext } from '../../contexts/HighlightId.context';
import * as S from './ViewCourses.style';
import { useHistory } from 'react-router-dom';

function deleteCourse(
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
  fetch(`/api/DeleteCourse`, {
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

function ViewCourses() {
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
    selectedId.setId(2);
    fetch(`/api/GetCourses`, {
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
      addBtnTxt={'COURSE'}
      handleSearch={(e) => {
        setFilteredData(
          data.filter(
            (item) =>
              item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
              item.lecturer
                .toLowerCase()
                .includes(e.target.value.toLowerCase()) ||
              item.description
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
          )
        );
      }}
    >
      <S.TableBox>
        <S.Title>Courses</S.Title>
        {error && notifType && (
          <Notification message={errorMessage} type={notifType} />
        )}
        {data ? (
          <S.FlexDiv>
            <S.Table>
              <thead>
                <tr>
                  <th>COURSE TITLE</th>
                  <th>LECTURER</th>
                  <th>DESCRIPTION</th>
                  <th>STUDENTS IN COURSE</th>
                  <th>CREATED</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {filteredData &&
                  filteredData.map((row) => (
                    <tr key={row.id}>
                      <td>{row.title}</td>
                      <td>{row.lecturer}</td>
                      <td>{row.description}</td>
                      <td>
                        {row.student_count === 0
                          ? 'No Students'
                          : row.student_count}
                      </td>
                      <td>{row.reg_date.slice(0, 10)}</td>
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
                            deleteCourse(
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
                            history.push(`/edit-course/${row.id}`)
                          }
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </S.Table>
            {filteredData && (
              <S.CoursesCount>
                Total Courses: {filteredData.length}
              </S.CoursesCount>
            )}
          </S.FlexDiv>
        ) : (
          <Loading />
        )}
      </S.TableBox>
    </MainWrapper>
  );
}

export default ViewCourses;
