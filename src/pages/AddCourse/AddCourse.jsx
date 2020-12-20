import React, { useState, useEffect, useContext } from 'react';
import {
  FormTemplate,
  MainWrapper,
  SelectedStudent,
  IconBtn,
} from '../../components';
import { AddCourseForm } from '../../utils/formData';
import { HighlightIdContext } from '../../contexts/HighlightId.context';
import * as S from './AddCourse.style';

function addCourseTo(
  fieldValues,
  setError,
  setErrorMessage,
  setNotifType,
  error,
  token,
  setLoadingBtn,
  selectedStudents
) {
  error = false;
  setLoadingBtn(true);
  if (selectedStudents.length !== 0) {
    fetch(`/api/AddCourse`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify([fieldValues, selectedStudents]),
    })
      .then((res) => {
        if (res.ok) {
          setNotifType('success');
        } else {
          error = true;
          setNotifType('error');
        }
        return res.json();
      })
      .then((data) => {
        setLoadingBtn(false);
        setError(true);
        setErrorMessage(data.msg || 'Error!');
      })
      .catch((err) => {
        setLoadingBtn(false);
        setError(true);
        setNotifType('error');
        setErrorMessage(err.message);
      });
  } else {
    setLoadingBtn(false);
    setError(true);
    setNotifType('error');
    setErrorMessage('No students selected!');
  }
}

function AddCourse() {
  const token = localStorage.getItem('token');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [notifType, setNotifType] = useState();
  const selectedId = useContext(HighlightIdContext);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [filteredData, setFilteredData] = useState();
  const [selectedStudents, setSelectedStudents] = useState([]);

  useEffect(() => {
    selectedId.setId(0);
    fetch(`/api/AddCourse`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFilteredData(data);
      })
      .catch((err) => {
        setLoadingBtn(false);
        setError(true);
        setNotifType('error');
        setErrorMessage(err.message);
      });
  }, [token, selectedId]);

  return (
    <MainWrapper>
      <S.FormBox>
        <S.Title>Add Course</S.Title>
        <S.InputBox>
          <FormTemplate
            callback={(fieldValues) =>
              addCourseTo(
                fieldValues,
                setError,
                setErrorMessage,
                setNotifType,
                error,
                token,
                setLoadingBtn,
                selectedStudents
              )
            }
            fields={AddCourseForm}
            splitInput={true}
            errorMessage={errorMessage}
            error={error}
            notifType={notifType}
            loading={loadingBtn}
            buttonName="Add"
          >
            <div>
              <div>
                {selectedStudents && (
                  <S.FlexDiv>
                    {selectedStudents.map((student, index) => (
                      <SelectedStudent
                        key={student.id}
                        studentName={student.name + ' ' + student.surname}
                        handleClick={() => {
                          let joinedArrFiltered = selectedStudents
                            .splice(index, 1)
                            .concat(filteredData);
                          setFilteredData(joinedArrFiltered);
                        }}
                      />
                    ))}
                  </S.FlexDiv>
                )}
              </div>
              <S.Text> Select Students to add the course:</S.Text>
              {filteredData && filteredData.length !== 0 && (
                <S.Table>
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>FULL NAME</th>
                      <th>PHONE</th>
                      <th>EMAIL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((row, index) => (
                      <tr key={row.id}>
                        <td>
                          <IconBtn
                            className="fas fa-plus"
                            handleClick={() => {
                              let joinedArr = selectedStudents.concat(
                                filteredData.splice(index, 1)
                              );

                              setSelectedStudents(joinedArr);
                            }}
                          />
                        </td>
                        <td>{row.name + ' ' + row.surname}</td>
                        <td>{row.phone}</td>
                        <td>{row.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </S.Table>
              )}
            </div>
          </FormTemplate>
        </S.InputBox>
      </S.FormBox>
    </MainWrapper>
  );
}

export default AddCourse;
