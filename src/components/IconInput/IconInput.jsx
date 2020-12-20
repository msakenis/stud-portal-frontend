import React from 'react';
import * as S from './IconInput.style';
import { string } from 'prop-types';

function IconInput({ className }) {
  return <S.StyledIcon className={className}></S.StyledIcon>;
}
IconInput.propTypes = {
  className: string.isRequired,
};
export default IconInput;
