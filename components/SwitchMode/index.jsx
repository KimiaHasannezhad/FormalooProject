
export default function SwitchMode(props) {
  const { mode, setMode } = props;

  return (
    <div className="text-black text-lg my-7">
      <button
        onClick={() => setMode("view")}
        className={`mx-1 ${mode === "view" && "font-bold"}`}
      >
        <span> View  </span>
      </button>
      /
      <button
        onClick={() => setMode("edit")}
        className={`mx-1 ${mode === "edit" && "font-bold "}`}
      >
        <span> Edit  </span>
      </button>
    </div>
  );
}
