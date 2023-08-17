import Image from "next/image";
import HandleEditPresentationBlock from "../PresentationBlocksActions/Edit";
import HandleDeletePresentationBlock from "../PresentationBlocksActions/Delete";
import Calendar from "react-calendar";
import Select from "react-select";
import { useState } from "react";

export default function BlockItemsDisplay(props) {
  const { mode, blockItems, setBlockItems } = props;

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [blockData, setBlockData] = useState();

  const [dragId, setDragId] = useState();

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev) => {
    const dragBlock = blockItems.find((Block) => Block.id === dragId);
    const dropBlock = blockItems.find(
      (Block) => Block.id === ev.currentTarget.id
    );

    const dragBlockOrder = dragBlock?.order;
    const dropBlockOrder = dropBlock?.order;

    const newBlockState = blockItems.map((Block) => {
      if (Block.id === dragId) {
        Block.order = dropBlockOrder;
      }
      if (Block.id === ev.currentTarget.id) {
        Block.order = dragBlockOrder;
      }
      return Block;
    });

    setBlockItems(newBlockState);
  };

  const IntractiveDropDownOptions = [
    { value: "Form Builder", label: "Form Builder" },
    { value: "App Builder", label: "App Builder" },
    { value: "Membership Portals", label: "Membership Portals" },
    { value: "Customer Data Platflorm", label: "Customer Data Platflorm" },
  ];

  const EditAndDeleteComponent = (blockData) => {
    return (
      <div>
        {blockData.blockData.blockType === "presentation" && (
          <button
            className="mx-3"
            onClick={() => {
              setBlockData(blockData);
              setShowEditModal(true);
            }}
          >
            <Image
              src={require("../../public/icons/edit.png")}
              width={20}
              height={20}
            />
          </button>
        )}
        <button
          onClick={() => {
            setBlockData(blockData);
            setShowDeleteModal(true);
          }}
        >
          <Image
            src={require("../../public/icons/delete.png")}
            width={20}
            height={20}
          />
        </button>
      </div>
    );
  };

  return (
    <section className=" text-center py-3 text-gray-600 w-3/5 self-center ">
      <div className="flex flex-col justify-center my-5 content-start">
        {!!blockItems &&
          blockItems.reverse().map((item, i) => {
            switch (item.contentType) {
              case "text":
                return (
                  <div
                    id={item.refrenceName}
                    className="my-5 py-5 px-3 bg-white rounded-xl shadow-lg flex flex-row justify-between "
                    draggable={true}
                    onDragOver={(ev) => ev.preventDefault()}
                    onDragStart={handleDrag}
                    onDrop={handleDrop}
                  >
                    <div className="flex flex-row flex-wrap w-4/5">
                      <span className="p-2 overflow-x-scroll">{item.value}</span>
                    </div>
                    {mode === "edit" && (
                      <EditAndDeleteComponent blockData={item} />
                    )}
                  </div>
                );
              case "image":
                return (
                  <div
                    id={item.refrenceName}
                    draggable={true}
                    onDragOver={(ev) => ev.preventDefault()}
                    onDragStart={handleDrag}
                    onDrop={handleDrop}
                    className="my-5 py-5 px-3 bg-white rounded-xl shadow-lg flex flex-row justify-between items-center"
                  >
                    <div>
                      <Image width={200} height={50} src={item.value} />
                    </div>
                    {mode === "edit" && (
                      <EditAndDeleteComponent blockData={item} />
                    )}
                  </div>
                );
              case "HTML Block":
                return (
                  <div
                    id={item.refrenceName}
                    className="my-5 py-5 px-3 bg-white rounded-xl shadow-lg  flex flex-row justify-between items-center"
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: `${item.value}` }}
                    ></div>
                    {mode === "edit" && (
                      <EditAndDeleteComponent blockData={item} />
                    )}
                  </div>
                );
              case "text input":
                return (
                  <div
                    id={item.refrenceName}
                    draggable={true}
                    onDragOver={(ev) => ev.preventDefault()}
                    onDragStart={handleDrag}
                    onDrop={handleDrop}
                    className="my-5 py-5 px-3 bg-white rounded-xl shadow-lg flex flex-row justify-between items-center"
                  >
                    <div>
                      Type text here :
                      <input
                        type="text"
                        defaultValue={item.value}
                        className="border-2 mx-2 border-[#555b] px-3 py-1 rounded-md "
                      ></input>
                    </div>
                    <div>
                      {mode === "edit" && (
                        <EditAndDeleteComponent blockData={item} />
                      )}
                    </div>
                  </div>
                );
              case "calendar":
                return (
                  <div
                    id={item.refrenceName}
                    className="my-5 py-5 px-3 bg-white rounded-xl shadow-lg flex flex-row justify-between items-center"
                  >
                    <div>
                      <Calendar
                        className="my-2"
                        defaultValue={item.value}
                      ></Calendar>
                    </div>

                    {mode === "edit" && (
                      <EditAndDeleteComponent blockData={item} />
                    )}
                  </div>
                );
              case "phone number":
                return (
                  <div
                    id={item.refrenceName}
                    className="my-5 py-5 px-3 bg-white rounded-xl shadow-lg flex flex-row justify-between items-center"
                  >
                    <div>
                      Type phone Number :
                      <input
                        maxLength={14}
                        pattern="[0-9]"
                        className="border-2 mx-2 border-[#555b] px-3 py-1 rounded-md"
                        placeholder="+98-111-222-33-44"
                        type="tel"
                        defaultValue={item.value}
                      ></input>
                    </div>

                    {mode === "edit" && (
                      <EditAndDeleteComponent blockData={item} />
                    )}
                  </div>
                );
              case "range input slider":
                return (
                  <div
                    id={item.refrenceName}
                    className="my-5 py-5 px-3 bg-white rounded-xl shadow-lg flex flex-row justify-between items-baseline"
                  >
                    <div>
                      Define a range :
                      <input
                        className="mx-2"
                        type="range"
                        min="0"
                        max="100"
                        onChange={(e) => {
                          item.value = `0 to ${e.target.value}`;
                          setBlockItems([
                            ...blockItems.filter((el) => el.id !== item.id),
                            item,
                          ]);
                        }}
                      />
                      <span className="my-3"> {item.value} </span>
                    </div>

                    {mode === "edit" && (
                      <EditAndDeleteComponent blockData={item} />
                    )}
                  </div>
                );
              case "dropdown":
                return (
                  <div
                    id={item.refrenceName}
                    className="my-5 py-5 px-3 bg-white rounded-xl shadow-lg flex flex-row justify-between items-baseline"
                  >
                    <div>
                      <Select
                        className="w-96 text-start"
                        isOptionSelected={true}
                        defaultInputValue={
                          IntractiveDropDownOptions.find(
                            (el) => el.value === item.value
                          ).value
                        }
                        options={IntractiveDropDownOptions}
                        onChange={(e) => {
                          item.value = e.value;
                          setBlockItems([
                            item,
                            ...blockItems.filter((el) => el.id !== item.id),
                          ]);
                        }}
                      ></Select>
                    </div>
                    {mode === "edit" && (
                      <EditAndDeleteComponent blockData={item} />
                    )}
                  </div>
                );
              case "file":
                return (
                  <div
                    id={item.refrenceName}
                    className="my-5 py-5 px-3 bg-white rounded-xl shadow-lg flex flex-row justify-between items-center"
                  >
                    <form className="flex flex-row-reverse items-center">
                      <label
                        className="
                        bg-slate-800
                        text-white
                        p-2
                        rounded-md
                        cursor-pointer
                        my-1
                      "
                        id="file-input-label"
                        for="file-input"
                      >
                        Select a File
                      </label>
                      <input
                        accept="image/*"
                        hidden
                        id="file-input"
                        type="file"
                        onChange={(e) => {
                          item.value = e.target.files[0];
                          setBlockItems([
                            ...blockItems.filter((el) => el.id !== item.id),
                            item,
                          ]);
                        }}
                      />
                      <img
                        className="mx-2"
                        id="frame"
                        src={URL.createObjectURL(item.value)}
                        width="100px"
                        height="100px"
                      ></img>
                    </form>
                    {mode === "edit" && (
                      <EditAndDeleteComponent blockData={item} />
                    )}
                  </div>
                );
              case "checkbox single":
                return (
                  <div
                    id={item.refrenceName}
                    className="my-5 py-5 px-3 bg-white rounded-xl shadow-lg flex flex-row justify-between items-center"
                  >
                    <div>
                      {item?.options?.map((opt) => {
                        return (
                          <div className="flex flex-row mx-2">
                            <input
                              type="radio"
                              id={opt}
                              name="BlockName"
                            ></input>
                            <label for="BlockName" className="mx-1">
                              {opt}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                    {mode === "edit" && (
                      <EditAndDeleteComponent blockData={item} />
                    )}
                  </div>
                );
              case "checkbox multiple":
                return (
                  <div
                    id={item.refrenceName}
                    className="my-5 py-5 px-3 bg-white rounded-xl shadow-lg flex flex-row justify-between items-center"
                  >
                    <div>
                      {item?.options?.map((opt) => {
                        return (
                          <div className="flex flex-row mx-2">
                            <input
                              type="checkbox"
                              id={opt}
                              name="boxName"
                            ></input>
                            <label for="boxName" f className="mx-1">
                              {opt}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                    {mode === "edit" && (
                      <EditAndDeleteComponent blockData={item} />
                    )}
                  </div>
                );
              default:
                return "";
            }
          })}
        <HandleEditPresentationBlock
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          blockData={blockData}
        />
        <HandleDeletePresentationBlock
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          blockData={blockData}
        />
      </div>
    </section>
  );
}
