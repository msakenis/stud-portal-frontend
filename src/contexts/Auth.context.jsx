import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

function clearLocalStorage() {
  localStorage.removeItem('token');
}

export const AuthProvider = ({ children }) => {
  const [token, updateToken] = useState(localStorage.getItem('token'));

  token && localStorage.setItem('token', token);

  return (
    <AuthContext.Provider value={{ token, updateToken, clearLocalStorage }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
