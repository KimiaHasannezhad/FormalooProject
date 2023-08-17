import { useState } from "react";
import Select from "react-select";
import HandleCreatePresentationBlock from "../PresentationBlocksActions/Create";

export default function PresentaionSelect(props) {
  const { setAddBlockModal} = props;
  const [selectedContentType, setSelectedContentType] = useState();
  const [presentationInput, setShowPresentationInput] = useState(false);
  const ContentTypeOptions = [
    { value: "text", label: "Text" },
    { value: "image", label: "Image" },
    { value: "HTML Block", label: "HTML Block" },
  ];

  const handleCreateContent = () => {
    setShowPresentationInput(true);
  };

  return (
    <div className="flex  justify-start my-5 flex-col">
      <label> Select the type of content :</label>
      <Select
        className="w-3/5 my-3"
        options={ContentTypeOptions}
        onChange={(e) => {
          setSelectedContentType(e.value);
          handleCreateContent(e.value);
        }}
      ></Select>
      {presentationInput && (
        <HandleCreatePresentationBlock
          selectedContentType={selectedContentType}
          setAddBlockModal={setAddBlockModal}
        />
      )}
    </div>
  );
}
