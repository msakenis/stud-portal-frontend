import React, { useContext, useEffect, useState } from 'react';
import { MainWrapper, Loading, IconBtn } from '../../components';
import { HighlightIdContext } from '../../contexts/HighlightId.context';
import * as S from './ViewStudents.style';

function ViewStudents() {
  const selectedId = useContext(HighlightIdContext);
  const token = localStorage.getItem('token');
  const [data, setData] = useState();

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
                      <IconBtn className="fas fa-edit" />{' '}
                      <IconBtn className="fas fa-trash-alt" />
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
