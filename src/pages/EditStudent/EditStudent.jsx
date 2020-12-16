import React, { useState, useEffect, useContext } from 'react';
import { FormTemplate, MainWrapper } from '../../components';
import { AddStudentForm } from '../../utils/formData';
import { HighlightIdContext } from '../../contexts/HighlightId.context';
import { useParams } from 'react-router-dom';
import * as S from './EditStudent.style';

function editStudent(
  fieldValues,
  setError,
  setErrorMessage,
  setNotifType,
  error,
  token,
  id
) {
  error = false;
  fetch(`${process.env.REACT_APP_SERVER_URL}/EditStudent/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(fieldValues),
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
      setError(true);
      setErrorMessage(data.msg || 'Error!');
    })
    .catch((err) => {
      setError(true);
      setNotifType('error');
      setErrorMessage(err.message);
    });
}

function EditStudent() {
  const token = localStorage.getItem('token');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [notifType, setNotifType] = useState();
  const selectedId = useContext(HighlightIdContext);
  const [studentData, setStudentData] = useState();
  let { id } = useParams();

  useEffect(() => {
    selectedId.setId(0);
    fetch(`${process.env.REACT_APP_SERVER_URL}/EditStudent/${id}`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStudentData(data);
      });
  }, [selectedId, token, id]);

  return (
    <MainWrapper>
      <S.FormBox>
        <S.InputBox>
          <S.Title>Edit Student</S.Title>
          <FormTemplate
            callback={(fieldValues) =>
              editStudent(
                fieldValues,
                setError,
                setErrorMessage,
                setNotifType,
                error,
                token,
                id
              )
            }
            fields={AddStudentForm}
            studentData={studentData}
            errorMessage={errorMessage}
            error={error}
            notifType={notifType}
            buttonName="Edit"
          />
        </S.InputBox>
      </S.FormBox>
    </MainWrapper>
  );
}

export default EditStudent;
