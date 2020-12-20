import React, { useEffect, useState, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';
import jwtDecode from 'jwt-decode';
import { Loading } from '../';
import { object, string } from 'prop-types';

function PrivateRoute({ path, component }) {
  const token = localStorage.getItem('token');
  const auth = useContext(AuthContext);
  const [authorized, setAuth] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (token) {
      const tokenExpiration = jwtDecode(token).exp;
      const timeNow = new Date().getTime() / 1000;

      if (!(tokenExpiration < timeNow)) {
        fetch(`${process.env.REACT_APP_SERVER_URL}/VerifyLoggedIn`, {
          headers: {
            Authorization: token,
          },
        })
          .then((res) => (res.ok ? setAuth(true) : setRedirect(true)))
          .catch((err) => {
            setRedirect(true);
            auth.clearLocalStorage();
          });
      } else {
        auth.clearLocalStorage();
        setRedirect(true);
      }
    } else {
      setRedirect(true);
      auth.clearLocalStorage();
    }
  }, [token, auth]);

  if (authorized) {
    return <Route exact path={path} component={component} />;
  } else if (redirect) {
    return <Redirect to={{ pathname: '/login' }} />;
  } else {
    return <Loading />;
  }
}

PrivateRoute.propTypes = {
  path: string.isRequired,
  component: object.isRequired,
};
export default PrivateRoute;
