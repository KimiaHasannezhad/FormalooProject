import { useState } from "react";
import Select from "react-select";
import IntractionSelect from "./IntractionSelect";
import PresentationSelect from "./PresentationSelect";

export default function CreateBlockItem(props) {
  const { setAddBlockModal, storagedItems, setStoragedItems } = props;
  const [selectedBlockType, setSelectedBlockType] = useState();
  const blockTypeOptions = [
    { value: "intraction", label: "Intraction Block" },
    { value: "presentation", label: "Presentation Block" },
  ];

  return (
    <div className="flex  justify-start my-5 flex-col">
      <label> Select the type of block :</label>
      <Select
        className="w-3/5 my-3"
        options={blockTypeOptions}
        onChange={(e) => setSelectedBlockType(e.value)}
      ></Select>
      {selectedBlockType === "intraction" && (
        <IntractionSelect setAddBlockModal={setAddBlockModal} />
      )}
      {selectedBlockType === "presentation" && (
        <PresentationSelect setAddBlockModal={setAddBlockModal} />
      )}
    </div>
  );
}
