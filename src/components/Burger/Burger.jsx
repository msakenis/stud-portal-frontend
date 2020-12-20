import React from 'react';
import * as S from './Burger.style';
import { bool, func } from 'prop-types';

const Burger = ({ open, setOpen }) => {
  return (
    <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </S.StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
