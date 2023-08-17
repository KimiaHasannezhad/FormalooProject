import { BlockItemsContext } from "@/context/BlockItemsProvider";
import { useState, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-range-slider-input/dist/style.css";
import Select from "react-select";
import Image from "next/image";
import { SingleOptionsContext } from "@/context/SingleOptionsProvider";
import { MultipleOptionsContext } from "@/context/MultipleOptions";

export default function HandleCreateIntractionBlock(props) {
  const { selectedContentType, setAddBlockModal } = props;
  const { blockItems, setBlockItems } = useContext(BlockItemsContext);
  const { singleOptions, setSingleOptions } = useContext(SingleOptionsContext);
  const { multipleOptions, setMultipleOptions } = useContext(
    MultipleOptionsContext
  );
  const [inputValue, setInputValue] = useState();

  const IntractiveDropDownOptions = [
    { value: "Form Builder", label: "Form Builder" },
    { value: "App Builder", label: "App Builder" },
    { value: "Membership Portals", label: "Membership Portals" },
    { value: "Customer Data Platflorm", label: "Customer Data Platflorm" },
  ];

  const renderSwitch = (param) => {
    switch (param) {
      case "text input":
        return (
          <div>
            <input
              type="text"
              className="border-2 my-3 border-[#555b] px-3 py-1 rounded-md"
              onChange={(e) => setInputValue(e.target.value)}
            ></input>
          </div>
        );
      case "markup":
        return (
          <div>
            <input
              type="text"
              className="border-2 my-3 border-[#555b] px-3 py-1 rounded-md"
              onChange={(e) => setInputValue(e.value)}
            ></input>
          </div>
        );
      case "calendar":
        return (
          <div>
            <Calendar onChange={(e) => setInputValue(e)}></Calendar>
          </div>
        );
      case "phone number":
        return (
          <div>
            <input
              maxLength={14}
              pattern="[0-9]{14}"
              type="tel"
              placeholder="+98-111-222-33-44"
              className="border-2  border-[#555b] px-3 py-1 rounded-md"
              onChange={(e) => setInputValue(e.target.value)}
            ></input>
          </div>
        );
      case "range input slider":
        return (
          <div>
            <input
              type="range"
              min="0"
              max="100"
              onChange={(e) => setInputValue(`0 to ${e.target.value}`)}
            />
            <span className="my-3">{inputValue} </span>
          </div>
        );
      case "dropdown":
        return (
          <div>
            <Select
              options={IntractiveDropDownOptions}
              onChange={(e) => setInputValue(e.value)}
            ></Select>
          </div>
        );
      case "file":
        return (
          <div>
            <form className="my-4">
              <label
                className="bg-slate-800 text-white p-2 rounded-md cursor-pointer my-1"
                id="file-input-label"
                for="file-input"
              >
                Select a File
              </label>
              <input
                hidden
                accept="image/*"
                id="file-input"
                type="file"
                onChange={(e) => {
                  setInputValue(e.target.files[0]);
                }}
              ></input>
              {inputValue && (
                <img
                  className="my-4"
                  id="frame"
                  src={URL.createObjectURL(inputValue)}
                  width="100px"
                  height="100px"
                />
              )}
            </form>
          </div>
        );
      case "checkbox single":
        const handleRemove = (opt) => {
          let newOptions = singleOptions.filter((el) => el !== opt);
          setSingleOptions(newOptions);
        };
        return (
          <div className="">
            Add options for the Checkbox :
            <input
              className="border-2 my-2 border-[#555b] px-3 py-1 rounded-md"
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <button
              className="mt-2"
              onClick={() => {
                if (
                  !singleOptions.find((el) => el === inputValue) &&
                  inputValue
                ) {
                  setSingleOptions(
                    singleOptions && [...singleOptions, inputValue]
                  );
                } else {
                  window.alert(
                    "you have added this item before or your input is empty"
                  );
                }
              }}
            >
              <Image
                className="mx-2"
                width={20}
                height={20}
                src={require("../../public/icons/plus.png")}
              ></Image>
            </button>
            <div className="flex flex-row  flex-wrap">
              {singleOptions?.map((opt) => {
                return (
                  <div className="border-2 flex flex-row p-2 m-1 rounded-md">
                    <div className="w-fit  ">{opt}</div>
                    <button onClick={() => handleRemove(opt)}>
                      <Image
                        className="mx-2"
                        width={20}
                        height={20}
                        src={require("../../public/icons/delete.png")}
                      ></Image>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      case "checkbox multiple":
        const handleRemoveMultipleItems = (opt) => {
          let newOptions = multipleOptions.filter((el) => el !== opt);
          setMultipleOptions(newOptions);
        };
        return (
          <div className="">
            Add options for the Checkbox :
            <input
              className="border-2 my-2 border-[#555b] px-3 py-1 rounded-md"
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <button
              className="mt-2"
              onClick={() => {
                if (
                  !multipleOptions.find((el) => el === inputValue) &&
                  inputValue
                ) {
                  setMultipleOptions(
                    multipleOptions && [...multipleOptions, inputValue]
                  );
                } else {
                  window.alert(
                    "you have added this item before or your input is empty"
                  );
                }
              }}
            >
              <Image
                className="mx-2"
                width={20}
                height={20}
                src={require("../../public/icons/plus.png")}
              ></Image>
            </button>
            <div className="flex flex-row  flex-wrap">
              {multipleOptions?.map((opt) => {
                return (
                  <div className="border-2 flex flex-row p-2 m-1 rounded-md">
                    <div className="w-fit  ">{opt}</div>
                    <button onClick={() => handleRemoveMultipleItems(opt)}>
                      <Image
                        className="mx-2"
                        width={20}
                        height={20}
                        src={require("../../public/icons/delete.png")}
                      ></Image>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      default:
        return "";
    }
  };

  const handleCreateBlock = () => {
    if (
      selectedContentType === "checkbox single" ||
      selectedContentType === "checkbox multiple"
    ) {
      setBlockItems([
        {
          id: blockItems.length ,
          blockType: "intraction",
          contentType: selectedContentType,
          value: inputValue,
          options:
            selectedContentType === "checkbox single"
              ? singleOptions
              : multipleOptions,
          refrenceName: "block" + blockItems.length ,
          order: blockItems.length,
        },
        ...blockItems,
      ]);
      setAddBlockModal(false);
      setSingleOptions([]);
    } else {
      if (
        !blockItems?.find(
          (el) =>
            el.contentType === selectedContentType && el.value === inputValue
        )
      ) {
        setBlockItems([
          {
            id: blockItems.length ,
            blockType: "intraction",
            contentType: selectedContentType,
            value: inputValue,
            options:
              selectedContentType === "checkbox single"
                ? singleOptions
                : multipleOptions,
            refrenceName: "block" + blockItems.length ,
            order:blockItems.length,
          },
          ...blockItems,
        ]);
        setAddBlockModal(false);
        setSingleOptions([]);
      } else {
        window.alert("you have added this Item before");
      }
    }
  };
  return (
    <div className="flex flex-row justify-start my-5">
      <div className="flex flex-col justify-start w-3/5">
        <div className="w-3/5">{renderSwitch(selectedContentType)}</div>
        <button
          disabled={!inputValue}
          className={` bg-[#8d4efc] rounded-lg p-2 my-2 w-24 text-white shadow-md ${
            !inputValue ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handleCreateBlock()}
        >
          Apply
        </button>
      </div>
    </div>
  );
}
