import React, { createContext, useState } from "react";

export const SingleOptionsContext = createContext({
  singleOptions: [],
  setSingleOptions: () => {},
});

export const SingleOptionsProvider = (props) => {
  const [singleOptions, setSingleOptions] = useState([]);
  return (
    <SingleOptionsContext.Provider value={{ singleOptions, setSingleOptions }}>
      {props.children}
    </SingleOptionsContext.Provider>
  );
};
