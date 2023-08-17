import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import CreateBlockItems from "./CreateBlockItems";

export default function AddBlock(props) {
  const { mode, setMode, storagedItems, setStoragedItems } = props;
  const [addBlockModal, setAddBlockModal] = useState(false);
  return (
    <div className="flex flex-row justify-center">
      {mode === "edit" && (
        <>
          <button
            onClick={() => setAddBlockModal(true)}
            className="w-32 flex flex-row items-center justify-around bg-slate-300 shadow-md rounded-full py-1 px-1"
          >
            <Image
              src={require("../../public/icons/plus.png")}
              width={20}
              height={20}
            />
            add Block
          </button>
          <div
            className="flex flex-row justify-center reative
          "
          >
            <Modal
              isOpen={addBlockModal}
              onRequestClose={() => setAddBlockModal(false)}
              style={{
                content: {
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50% , -50%)",
                  width: "60%",
                  height: "60%",
                  borderRadius: "1.5rem",
                  border: "none",
                  boxShadow: "rgb(219 219 220) 5px 0px 20px",
                },
              }}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <CreateBlockItems
                    storagedItems={storagedItems}
                    setStoragedItems={setStoragedItems}
                    setAddBlockModal={setAddBlockModal}
                  />
                </div>
                <button
                  onClick={() => setAddBlockModal(false)}
                  className="bg-[#f76015] rounded-lg p-2 w-24 text-white shadow-md float-right"
                >
                  Close
                </button>
              </div>
            </Modal>
          </div>
        </>
      )}
    </div>
  );
}
