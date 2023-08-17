import { useContext, useState } from "react";
import Select from "react-select";
import HandleCreateIntractionBlock from "../IntractionBlocksActions/Create";
import { SingleOptionsContext } from "@/context/SingleOptionsProvider";
import { MultipleOptionsContext } from "@/context/MultipleOptions";

export default function IntractionSelect(props) {
  const { setAddBlockModal } = props;
  const [selectedContentType, setSelectedContentType] = useState();
  const { setSingleOptions } = useContext(SingleOptionsContext);
  const { setMultipleOptions } = useContext(MultipleOptionsContext);
  const [intractionInput, setIntractionInput] = useState(false);

  const ContentTypeOptions = [
    { value: "text input", label: "Text input" },
    { value: "markup", label: "Markup input" },
    { value: "calendar", label: "Calendar" },
    { value: "phone number", label: "Phone number" },
    { value: "range input slider", label: "Range input (slider)" },
    { value: "dropdown", label: "Dropdown" },
    { value: "file", label: "File" },
    { value: "checkbox single", label: "Checkbox (single select)" },
    { value: "checkbox multiple", label: "Checkbox (multiple select) " },
  ];

  const handleCreateContent = () => {
    setIntractionInput(true);
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
          {
            e.value === "checkbox single"
              ? setSingleOptions([])
              : e.value === "checkbox multiple"
              ? setMultipleOptions([])
              : "";
          }
        }}
      ></Select>
      {intractionInput && (
        <HandleCreateIntractionBlock
          selectedContentType={selectedContentType}
          setAddBlockModal={setAddBlockModal}
        />
      )}
    </div>
  );
}
