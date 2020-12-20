import React, { useState, useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { registration } from '../../utils/formData';
import { Wrapper, Logo, FormTemplate } from '../../components';
import { AuthContext } from '../../contexts/Auth.context';
import * as S from './Login.style';

function loginTo(
  fieldValues,
  setError,
  setErrorMessage,
  setNotifType,
  token,
  history,
  error,
  setLoadingBtn
) {
  error = false;
  setLoadingBtn(true);
  fetch(`${process.env.REACT_APP_API}/Login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(fieldValues),
  })
    .then((res) => {
      if (!res.ok) {
        error = true;
        setError(true);
        setNotifType('error');
      }
      return res.json();
    })
    .then((data) => {
      setLoadingBtn(false);
      if (error) {
        setErrorMessage(data.msg || 'Error!');
      } else {
        token.updateToken('Bearer ' + data.token);
        history.push('/');
      }
    })
    .catch((err) => {
      setLoadingBtn(false);
      setError(true);
      setNotifType('error');
      setErrorMessage(err.message);
    });
}

function Login() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [notifType, setNotifType] = useState();
  const token = useContext(AuthContext);
  const history = useHistory();
  const [loadingBtn, setLoadingBtn] = useState(false);

  return (
    <Wrapper
      backgroundImg={
        'https://blog.vpncity.com/wp-content/uploads/2020/01/business.jpg'
      }
      isBlur={true}
    >
      <>
        {token.token ? (
          <Redirect to={{ pathname: '/' }} />
        ) : (
          <S.FlexDiv>
            <S.ImageBox>
              <Logo />
            </S.ImageBox>
            <S.FormBox>
              <S.Title>
                Welcome to <S.ColorSpan>CodeOp</S.ColorSpan>
              </S.Title>
              <S.TextBox>
                We make life easier for people who would like to become
                professional software developer!
              </S.TextBox>
              <S.LinesDiv>
                <S.Line />
                <S.Line />
              </S.LinesDiv>
              <FormTemplate
                callback={(fieldValues) =>
                  loginTo(
                    fieldValues,
                    setError,
                    setErrorMessage,
                    setNotifType,
                    token,
                    history,
                    error,
                    setLoadingBtn
                  )
                }
                fields={registration}
                errorMessage={errorMessage}
                error={error}
                notifType={notifType}
                buttonName="Login"
                loading={loadingBtn}
              />
              <S.LinksBox>
                <S.TextSpan>Or login with</S.TextSpan>
                <S.Links href="https://www.facebook.com/">Facebook</S.Links>
                <S.Links href="https://www.linkedin.com/">LinkedIn</S.Links>
                <S.Links href="https://www.google.com/">Google</S.Links>
              </S.LinksBox>
            </S.FormBox>
          </S.FlexDiv>
        )}
      </>
    </Wrapper>
  );
}

export default Login;
