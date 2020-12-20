import React from 'react';
import { IconBtn } from '../';
import { func, bool, number } from 'prop-types';

function IconBtnsConfirm({
  displayBtns,
  handleClick,
  handleClose,
  handleConfirm,
  handleEdit,
  selectedId,
  id,
}) {
  return displayBtns && selectedId === id ? (
    <>
      Delete?
      <IconBtn className="fas fa-check" handleClick={handleConfirm} />
      <IconBtn className="fas fa-times" handleClick={handleClose} />
    </>
  ) : (
    <>
      <IconBtn className="fas fa-edit" handleClick={handleEdit} />
      <IconBtn className="fas fa-trash-alt" handleClick={handleClick} />
    </>
  );
}
IconBtn.propTypes = {
  displayBtns: bool,
  handleClick: func,
  handleClose: func,
  handleConfirm: func,
  handleEdit: func,
  selectedId: number,
  id: number,
};
export default IconBtnsConfirm;
