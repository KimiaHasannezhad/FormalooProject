import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import SwitchMode from "@/components/SwitchMode";
import { SwitchModeContext } from "@/context/ModeProvider";
import { useContext, useEffect, useState, useRef } from "react";
import AddBlock from "@/components/AddBlock";
import PresentationBlock from "@/components/PresentationBlocksActions/Create";
import IntractionBlock from "@/components/IntractionBlocksActions/Create";
import {
  BlockItemsContext,
  BlockItemsProvider,
} from "@/context/BlockItemsProvider";
import BlockItemsDisplay from "@/components/BlockItemsDisplay";
// import { StoragedDataContext } from "@/context/StoragedData";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { mode, setMode } = useContext(SwitchModeContext);
  const { blockItems, setBlockItems } = useContext(BlockItemsContext);

  // const { storagedData, setStoragedData } = useContext(StoragedDataContext);
  // const [storagedItems, setStoragedItems] = useState();
  // useEffect(() => {
  //     var data =JSON.parse(localStorage.getItem("items"));
  //   if (!!data) {
  //     setStoragedItems(data);
  //   }
  // }, []);
  // useEffect(() => {
  //   setStoragedData(storagedData);
  // });
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="my-7">
      <SwitchMode mode={mode} setMode={setMode} />
      <AddBlock
        mode={mode}
        setMode={setMode}
        // storagedItems={storagedItems}
        // setStoragedItems={setStoragedItems}
      />
      </div>
      {/* {console.log(storagedItems)} */}
      <BlockItemsDisplay
        mode={mode}
        setMode={setMode}
        // storagedItems={storagedItems}
        // setStoragedItems={setStoragedItems}
        blockItems={blockItems}
        setBlockItems={setBlockItems}
      />
      {/* <IntractionBlock />
      <PresentationBlock /> */}
    </div>
  );
}
