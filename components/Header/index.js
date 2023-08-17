import { BlockItemsContext } from "@/context/BlockItemsProvider";
import { useContext } from "react";

export default function Header() {
  const { blockItems } = useContext(BlockItemsContext);

  return (
    <div className=" text-center py-3 text-gray-600 shadow-2xl h-16 w-3/5 self-center rounded-3xl my-5">
      <div className="bg-[#8d4efc] flex flex-row rounded-3xl p-5 overflow-x-scroll">
        {blockItems?.reverse().map((item, i) => {
          return (
            <div className="shadow-lg p-1 m-2 text-white font-bold rounded-md min-w-fit bg-white bg-opacity-30">

              <button
              className="p-1"
                id="linkBtn"
                onClick={() => {
                  console.log(item.refrenceName);
                  document
                    .getElementById(item.refrenceName)
                    ?.scrollIntoView({ top: 0, behavior: "smooth" });
                }}
              >
                {item.refrenceName}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
