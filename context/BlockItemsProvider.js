import React, { createContext, useState } from "react";

export const BlockItemsContext = createContext({
  blockItems: [],
  setBlockItems: () => {},
});

export const BlockItemsProvider = (props) => {
  const [blockItems, setBlockItems] = useState([
    {
      id: 1,
      blockType: "presentation",
      contentType: "image",
      value:
        "https://www.formaloo.com/en/wp-content/themes/formaloo3/assets/images/Logo.svg",
      refrenceName: "block No1",
      order: "1",
    },
    {
      id: 0,
      blockType: "intraction",
      contentType: "text input",
      value: "defualt value",
      refrenceName: "block No0",
      order: "2",
    },
  ]);
  return (
    <BlockItemsContext.Provider value={{ blockItems, setBlockItems }}>
      {props.children}
    </BlockItemsContext.Provider>
  );
};
