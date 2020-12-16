import React from 'react';
import { IconBtn } from '../';

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

export default IconBtnsConfirm;
