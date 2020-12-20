import React, { useState, useEffect } from 'react';
import { InputField, Button, Notification } from '../';
import { bool, func, array, string, element, object } from 'prop-types';

import * as S from './FormTemplate.style';

function FormTemplate({
  fields,
  callback,
  notifType,
  error,
  errorMessage,
  buttonName,
  formTitle,

  Data,
  loading,
  splitInput,
  children,
}) {
  const [fieldValues, setFieldValues] = useState('');

  useEffect(() => {
    Data && setFieldValues(Data);
  }, [Data]);

  return (
    <>
      {error && notifType && (
        <Notification message={errorMessage} type={notifType} />
      )}
      <S.FormDiv>
        <S.FormTitle>{formTitle}</S.FormTitle>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            callback(fieldValues);
          }}
        >
          {splitInput ? (
            <>
              <S.FlexBox>
                {fields.slice(0, 2).map((field) => (
                  <InputField
                    inputId={field.name}
                    key={field.name}
                    name={field.name}
                    type={field.type}
                    label={field.labelText}
                    required={field.required}
                    minLength={field.minLength}
                    maxLength={field.maxLength}
                    placeholder={field.placeholder}
                    iconClass={field.iconClass}
                    inputValue={
                      fieldValues[field.name] ? fieldValues[field.name] : ''
                    }
                    handleChange={(e) => {
                      setFieldValues({
                        ...fieldValues,
                        [field.name]: e.target.value,
                      });
                    }}
                  />
                ))}
              </S.FlexBox>
              {fields.slice(2, 10).map((field) => (
                <InputField
                  inputId={field.name}
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  label={field.labelText}
                  required={field.required}
                  minLength={field.minLength}
                  maxLength={field.maxLength}
                  placeholder={field.placeholder}
                  iconClass={field.iconClass}
                  inputValue={
                    fieldValues[field.name] ? fieldValues[field.name] : ''
                  }
                  handleChange={(e) => {
                    setFieldValues({
                      ...fieldValues,
                      [field.name]: e.target.value,
                    });
                  }}
                />
              ))}
            </>
          ) : (
            <>
              {fields.map((field) => (
                <InputField
                  inputId={field.name}
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  label={field.labelText}
                  required={field.required}
                  minLength={field.minLength}
                  maxLength={field.maxLength}
                  placeholder={field.placeholder}
                  iconClass={field.iconClass}
                  inputValue={
                    fieldValues[field.name] ? fieldValues[field.name] : ''
                  }
                  handleChange={(e) => {
                    setFieldValues({
                      ...fieldValues,
                      [field.name]: e.target.value,
                    });
                  }}
                />
              ))}
            </>
          )}
          {children}
          <S.ButtonBox>
            <Button type="submit" loading={loading}>
              {buttonName}
            </Button>
          </S.ButtonBox>
        </form>
      </S.FormDiv>
    </>
  );
}

FormTemplate.propTypes = {
  fields: array.isRequired,
  callback: func.isRequired,
  notifType: string,
  error: bool,
  errorMessage: string,
  buttonName: string,
  formTitle: string,
  Data: object,
  loading: bool,
  splitInput: bool,
  children: element,
};
export default FormTemplate;
