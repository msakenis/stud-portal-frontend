import React, { createContext, useState } from 'react';

export const HighlightIdContext = createContext();

export const HighlightIdProvider = ({ children }) => {
  const [selectedId, setId] = useState();

  return (
    <HighlightIdContext.Provider value={{ selectedId, setId }}>
      {children}
    </HighlightIdContext.Provider>
  );
};

export default HighlightIdProvider;
