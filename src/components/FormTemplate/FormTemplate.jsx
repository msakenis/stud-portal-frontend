import React, { useState } from 'react';
import { InputField, Button, Notification } from '../';

import * as S from './FormTemplate.style';

function FormTemplate({
  fields,
  callback,
  notifType,
  error,
  errorMessage,
  buttonName,
  formTitle,
  loginNotif,
  options,
  iconClass,
}) {
  const [fieldValues, setFieldValues] = useState({});

  return (
    <>
      {error && notifType && (
        <Notification
          message={errorMessage}
          type={notifType}
          loginNotif={loginNotif}
        />
      )}
      <S.FormDiv>
        <S.FormTitle>{formTitle}</S.FormTitle>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            callback(fieldValues);
          }}
        >
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
              options={options}
              iconClass={field.iconClass}
              handleChange={(e) =>
                setFieldValues({ ...fieldValues, [field.name]: e.target.value })
              }
            />
          ))}
          <S.ButtonBox>
            <Button type="submit">{buttonName}</Button>
          </S.ButtonBox>
        </form>
      </S.FormDiv>
    </>
  );
}

export default FormTemplate;
