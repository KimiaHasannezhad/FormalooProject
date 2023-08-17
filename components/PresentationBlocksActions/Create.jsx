import { BlockItemsContext } from "@/context/BlockItemsProvider";
import { MultipleOptionsContext } from "@/context/MultipleOptions";
import { SingleOptionsContext } from "@/context/SingleOptionsProvider";
// import { StoragedDataContext } from "@/context/StoragedData";
import { useContext, useState } from "react";

export default function HandleCreatePresentationBlock(props) {
  const { setAddBlockModal, selectedContentType } = props;
  const { blockItems, setBlockItems } = useContext(BlockItemsContext);
  const { singleOptions } = useContext(SingleOptionsContext);
  const { multipleOptions } = useContext(MultipleOptionsContext);
  const [inputValue, setInputValue] = useState();

  return (
    <div className="flex flex-col">
      {selectedContentType === "text" && <>Type the Text you want to show :</>}
      {selectedContentType === "image" && <>Type the URL of your Image :</>}
      {selectedContentType === "HTML Block" && <>Type the HTML code :</>}
      <textarea
        className="border-2  my-3 border-[#555b] px-3 py-1 rounded-md w-3/5"
        onChange={(e) => { setInputValue(e.target.value);
        }}
      ></textarea>

      <button
        disabled={!inputValue}
        className={` bg-[#8d4efc] rounded-lg p-2 w-24 text-white shadow-md ${
          !inputValue ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => {
          if (
            !blockItems?.find(
              (el) =>
                el.contentType === selectedContentType &&
                el.value === inputValue
            )
          ) {
            setBlockItems([
              {
                id: blockItems.length,
                blockType: "presentation",
                contentType: selectedContentType,
                value: inputValue,
                options:
                  selectedContentType === "checkbox single"
                    ? singleOptions
                    : multipleOptions,
                refrenceName: "block No" + blockItems.length,
                order: blockItems.length,
              },
              ...blockItems,
            ]);
            setAddBlockModal(false);
          } else {
            window.alert("you have added this Item before");
          }
        }}
      >
        Apply
      </button>
    </div>
  );
}
