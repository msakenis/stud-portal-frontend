import React, { useState, useEffect, useContext } from 'react';
import { FormTemplate, MainWrapper } from '../../components';
import { AddStudentForm } from '../../utils/formData';
import { HighlightIdContext } from '../../contexts/HighlightId.context';
import * as S from './AddStudent.style';

function addStudentTo(
  fieldValues,
  setError,
  setErrorMessage,
  setNotifType,
  error,
  token,
  setLoadingBtn
) {
  error = false;
  setLoadingBtn(true);
  fetch(`/api/AddStudent`, {
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
}

function AddStudent() {
  const token = localStorage.getItem('token');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [notifType, setNotifType] = useState();
  const selectedId = useContext(HighlightIdContext);
  const [loadingBtn, setLoadingBtn] = useState(false);

  useEffect(() => {
    selectedId.setId(0);
  }, [selectedId]);

  return (
    <MainWrapper>
      <S.FormBox>
        <S.InputBox>
          <S.Title>Add Student</S.Title>
          <FormTemplate
            callback={(fieldValues) =>
              addStudentTo(
                fieldValues,
                setError,
                setErrorMessage,
                setNotifType,
                error,
                token,
                setLoadingBtn
              )
            }
            fields={AddStudentForm}
            errorMessage={errorMessage}
            error={error}
            notifType={notifType}
            loading={loadingBtn}
            buttonName="Add"
          />
        </S.InputBox>
      </S.FormBox>
    </MainWrapper>
  );
}

export default AddStudent;
