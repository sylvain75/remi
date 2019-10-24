import React from 'react';
import AppProvider from 'store/provider';
import "./src/globalCss/tailwind.css"

// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};
