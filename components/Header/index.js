import { BlockItemsContext } from "@/context/BlockItemsProvider";
import { GlobalRefContext } from "@/context/GlobalRefProvider";
import { useContext } from "react";

export default function Header(props) {
  const { blockItems } = useContext(BlockItemsContext);
  const { globalRef } = useContext(GlobalRefContext);

  // function scrollToBlock(id) {
  //   // document.getElementById("searchbox").focus();
  //   console.log(id)
  //   document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  // }
  // document.getElementById("btn").onclick = scrollToBlock;

  return (
    <div className=" text-center py-3 text-gray-600 shadow-2xl h-16 w-3/5 self-center rounded-3xl my-5">
      <div className="bg-[#8d4efc] flex flex-row rounded-3xl p-5 overflow-x-scroll">
        {blockItems?.reverse().map((item, i) => {
          return (
            <div className="border-2 p-1 m-2 text-white rounded-md min-w-fit">
              {/* <ScrollIntoView selector={`#${item.refrenceName}`}> */}
              <button
                id="linkBtn"
                onClick={() => {
                  console.log(item.refrenceName);
                  document
                    .getElementById(item.refrenceName)
                    ?.scrollIntoView({ top: 0, behavior: "smooth" });
                }}
                // onClick={() => {
                //   document.getElementById(item.refrenceName).scrollIntoView()
                // setTimeout(
                //   () =>
                //   scrollTo(0,500),
                //   document.getElementById(item.refrenceName)
                //       ?.scrollTo(),
                //   77
                // );
                // }}
                // onClick={document
                //   .querySelector(`#${item.refrenceName}`)
                //   ?.scrollIntoView({ behavior: "smooth", block: "center" })}
              >
                {item.refrenceName}
              </button>
              {/* </ScrollIntoView> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
