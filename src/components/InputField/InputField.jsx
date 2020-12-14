import React from 'react';
import * as S from './InputField.style';

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
  options,
  iconClass,
}) {
  switch (type) {
    case 'email':
      return (
        <S.InputDiv>
          <S.Icon className="fas fa-envelope" />
          <S.InputField
            onChange={handleChange}
            id={inputId}
            name={name}
            type="email"
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
          />
          {label && <S.Label htmlFor={inputId}>{label}</S.Label>}
        </S.InputDiv>
      );
    case 'password':
      return (
        <S.InputDiv>
          <S.Icon className="fas fa-key" />
          <S.InputField
            onChange={handleChange}
            id={inputId}
            name={name}
            type="password"
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
          />
          {label && <S.Label htmlFor={inputId}>{label}</S.Label>}
        </S.InputDiv>
      );
    case 'dropdown':
      return (
        <S.InputDiv>
          {label && <S.Label htmlFor={inputId}>{label}</S.Label>}
          <S.DropdownBox>
            <S.DropdownSelect
              onChange={handleChange}
              id={inputId}
              name={name}
              required={required}
            >
              <option value="" disabled>
                Select option
              </option>
              {options &&
                options.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.text}
                  </option>
                ))}
            </S.DropdownSelect>
          </S.DropdownBox>
        </S.InputDiv>
      );
    default:
      return (
        <S.InputDiv>
          {iconClass && <S.Icon className={iconClass} />}
          <S.InputField
            onChange={handleChange}
            id={inputId}
            name={name}
            type="text"
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
          />
          {label && <S.Label htmlFor={inputId}>{label}</S.Label>}
        </S.InputDiv>
      );
  }
}

export default InputField;
