import React, { createContext, useState } from "react";

export const GlobalRefContext = createContext({
  globalRef: ``,
  setGlobalRef: () => {},
});

export const GlobalRefProvider = (props) => {
  const [globalRef, setGlobalRef] = useState("view");
  return (
    <GlobalRefContext.Provider value={{ globalRef, setGlobalRef }}>
      {props.children}
    </GlobalRefContext.Provider>
  );
};
