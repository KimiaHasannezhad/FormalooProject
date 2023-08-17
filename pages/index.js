import { Inter } from "next/font/google";
import Header from "@/components/Header";
import SwitchMode from "@/components/SwitchMode";
import { SwitchModeContext } from "@/context/ModeProvider";
import { useContext } from "react";
import AddBlock from "@/components/AddBlock";
import { BlockItemsContext } from "@/context/BlockItemsProvider";
import BlockItemsDisplay from "@/components/BlockItemsDisplay";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { mode, setMode } = useContext(SwitchModeContext);
  const { blockItems, setBlockItems } = useContext(BlockItemsContext);

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="my-7">
        <SwitchMode mode={mode} setMode={setMode} />
        <AddBlock mode={mode} setMode={setMode} />
      </div>
      <BlockItemsDisplay
        mode={mode}
        setMode={setMode}
        blockItems={blockItems}
        setBlockItems={setBlockItems}
      />
    </div>
  );
}
