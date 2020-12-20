import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  FormTemplate,
  MainWrapper,
  SelectedStudent,
  IconBtn,
} from '../../components';
import { AddCourseForm } from '../../utils/formData';
import { HighlightIdContext } from '../../contexts/HighlightId.context';
import * as S from './EditCourse.style';

function editCourse(
  fieldValues,
  setError,
  setErrorMessage,
  setNotifType,
  error,
  token,
  setLoadingBtn,
  selectedStudents,
  id
) {
  error = false;
  setLoadingBtn(true);
  if (selectedStudents.length !== 0) {
    fetch(`${process.env.REACT_APP_SERVER_URL}/EditCourse/${id}`, {
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

function EditCourse() {
  const token = localStorage.getItem('token');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [notifType, setNotifType] = useState();
  const selectedId = useContext(HighlightIdContext);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [filteredData, setFilteredData] = useState();
  const [selectedStudents, setSelectedStudents] = useState([]);

  const [courseData, setCourseData] = useState();
  let { id } = useParams();

  useEffect(() => {
    selectedId.setId(0);

    fetch(`${process.env.REACT_APP_SERVER_URL}/EditCourse/${id}`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourseData(data);
        setSelectedStudents(data.selectedStuds);
        setFilteredData(data.unselectedStuds);
      });
  }, [token, selectedId, id]);

  return (
    <MainWrapper
    //   handleSearch={(e) => {
    //     setFilteredData(
    //       unselectedStuds.filter(
    //         (item) =>
    //           item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
    //           item.surname
    //             .toLowerCase()
    //             .includes(e.target.value.toLowerCase()) ||
    //           item.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
    //           item.phone.includes(e.target.value)
    //       )
    //     );
    //   }}
    >
      <S.FormBox>
        <S.Title>Edit Course</S.Title>
        <S.InputBox>
          <FormTemplate
            callback={(fieldValues) =>
              editCourse(
                fieldValues,
                setError,
                setErrorMessage,
                setNotifType,
                error,
                token,
                setLoadingBtn,
                selectedStudents,
                id
              )
            }
            fields={AddCourseForm}
            splitInput={true}
            errorMessage={errorMessage}
            Data={courseData}
            error={error}
            notifType={notifType}
            loading={loadingBtn}
            buttonName="Edit"
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

export default EditCourse;
