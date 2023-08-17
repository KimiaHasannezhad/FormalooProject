import React, { createContext, useState } from "react";

export const MultipleOptionsContext = createContext({
  multipleOptions: [],
  setMultipleOptions: () => {},
});

export const MultipleOptionsProvider = (props) => {
  const [multipleOptions, setMultipleOptions] = useState([]);
  return (
    <MultipleOptionsContext.Provider
      value={{ multipleOptions, setMultipleOptions }}
    >
      {props.children}
    </MultipleOptionsContext.Provider>
  );
};
