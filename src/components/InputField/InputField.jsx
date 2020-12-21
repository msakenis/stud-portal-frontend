import React from 'react';
import * as S from './InputField.style';
import { func, bool, number, string, oneOfType } from 'prop-types';

function InputField({
  label,
  name,
  handleChange,
  type,
  inputId,
  required,
  minLength,
  maxLength,
  placeholder,
  iconClass,
  inputValue,
}) {
  switch (type) {
    case 'email':
      return (
        <S.InputDiv>
          <S.Icon className="fas fa-envelope" />
          <S.InputField
            onChange={handleChange}
            onBlur={handleChange}
            id={name}
            name={name}
            type="email"
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
            value={inputValue}
          />
          {label && <S.Label htmlFor={name}>{label}</S.Label>}
        </S.InputDiv>
      );
    case 'password':
      return (
        <S.InputDiv>
          <S.Icon className="fas fa-key" />
          <S.InputField
            onChange={handleChange}
            onBlur={handleChange}
            id={name}
            name={name}
            type="password"
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
          />
          {label && <S.Label htmlFor={name}>{label}</S.Label>}
        </S.InputDiv>
      );

    default:
      return (
        <S.InputDiv>
          {iconClass && <S.Icon className={iconClass} />}
          <S.InputField
            onChange={handleChange}
            onBlur={handleChange}
            id={name}
            name={name}
            type="text"
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
            value={inputValue}
          />
          {label && <S.Label htmlFor={name}>{label}</S.Label>}
        </S.InputDiv>
      );
  }
}

InputField.propTypes = {
  label: string,
  name: string.isRequired,
  handleChange: func,
  type: string.isRequired,
  inputId: string,
  required: bool,
  minLength: number,
  maxLength: number,
  placeholder: string,
  iconClass: string,
  inputValue: oneOfType([number, string]),
};
export default InputField;
