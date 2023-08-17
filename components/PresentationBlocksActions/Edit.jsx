import { useState, useContext } from "react";
import { BlockItemsContext } from "@/context/BlockItemsProvider";

import Modal from "react-modal";
import Calendar from "react-calendar";

export default function HandleEditPresentationBlock(props) {
  const { blockData, showEditModal, setShowEditModal } = props;
  const { blockItems, setBlockItems } = useContext(BlockItemsContext);
  const [inputValue, setInputValue] = useState();
  return (
    <section className=" text-center py-3 text-gray-600 w-3/5 self-center ">
      <Modal
        isOpen={showEditModal}
        onRequestClose={() => {
          setShowEditModal(false);
        }}
        style={{
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50% , -50%)",
            width: "30%",
            height: "30%",
            borderRadius: "1.5rem",
            border: "none",
            boxShadow: "rgb(219 219 220) 5px 0px 20px",
          },
        }}
      >
        <div className="flex flex-col justify-center ">
          <div className="flex flex-row justify-center">
            <textarea
              defaultValue={blockData?.blockData?.value}
              className="border-2 w-full  my-3 border-[#555b] px-3 py-1 rounded-md"
              onChange={(e) => setInputValue(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-row justify-center">
            <button
              disabled={!inputValue}
              className={` bg-[#8d4efc] rounded-lg p-2 w-24 text-white shadow-md ${
                !inputValue ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => {
                var selectedItem = blockItems.find(
                  (el) => el.id === blockData.blockData.id
                );
                selectedItem.value = inputValue;
                if (
                  !blockItems?.find(
                    (el) =>
                      el.contentType === selectedItem.contentType &&
                      el.value === selectedItem.value
                  )
                ) {
                  setBlockItems([
                    selectedItem,
                    ...blockItems.filter(
                      (el) => el.id !== blockData.blockData.id
                    ),
                  ]);
                }
                setShowEditModal(false);
              }}
            >
              Apply
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
