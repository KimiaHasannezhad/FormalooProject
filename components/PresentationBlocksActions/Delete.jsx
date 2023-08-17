import { useState, useContext } from "react";
import { BlockItemsContext } from "@/context/BlockItemsProvider";

import Modal from "react-modal";

export default function HandleDeletePresentationBlock(props) {
  const { blockData, showDeleteModal, setShowDeleteModal } = props;
  const { blockItems, setBlockItems } = useContext(BlockItemsContext);

  return (
    <section className=" text-center py-3 text-gray-600 w-3/5 self-center ">
      <Modal
        isOpen={showDeleteModal}
        onRequestClose={() => setShowDeleteModal(false)}
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
        <div className="flex flex-col justify-around h-full">
          <div className="text-center">Are you sure you want to Delete this Block ?</div>
          <div className="flex flex-row justify-center">
            <button
              className="bg-[#8d4efc] rounded-lg p-2 w-24 text-white shadow-md mx-1"
              onClick={() => {
                var selectedItem = blockItems.find(
                  (el) => el.id === blockData.blockData.id
                );
                setBlockItems(
                  blockItems.filter((el) => el.id !== selectedItem.id)
                );
                setShowDeleteModal(false);
              }}
            >
              YES
            </button>
            <button
              className="bg-[#f76015] rounded-lg p-2 w-24 text-white shadow-md float-right mx-1"
              onClick={() => setShowDeleteModal(false)}
            >
              NO
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
