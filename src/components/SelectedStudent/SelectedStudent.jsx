import React from 'react';
import * as S from './SelectedStudent.style';
import { IconBtn } from '../';
import { func, string } from 'prop-types';

function SelectedStudent({ studentName, handleClick }) {
  return (
    <S.StudentSpan>
      {studentName}
      <IconBtn
        handleClick={handleClick}
        className="fas fa-times-circle"
        background={true}
      />
    </S.StudentSpan>
  );
}

SelectedStudent.propTypes = {
  handleClick: func.isRequired,
  studentName: string.isRequired,
};
export default SelectedStudent;
