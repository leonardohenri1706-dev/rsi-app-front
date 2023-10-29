import { useNavigate } from "react-router";

import { usePageContext } from "@/app/store";

import { clipBoardStyling } from "./Clipboard";
import pages from "@/app/routes";

const indexedPages = pages.filter((page) => page.indexed);

export const Menu: React.FC = () => {
  const navigate = useNavigate();

  const { menuIsOpen } = usePageContext();

  const menuOpenClassName = menuIsOpen ? "translate-x-0" : "translate-x-full";

  const renderIndexItems = indexedPages.map((page) => (
    <li
      className="text-[1rem] cursor-pointer hover:text-[#01967F] transition-all underline"
      onClick={() => navigate(page.path)}
      key={page.path}
    >
      {page.indexName ?? page.name}
    </li>
  ));

  return (
    <div
      className={`
        ${clipBoardStyling.className} 
        ${menuOpenClassName} transition-all duration-500
        !absolute top-[2.5rem] -left-[20rem] !z-[1]
        flex flex-col justify-start items-center
        py-[1rem] pl-[1rem] pr-[5rem]
        !w-[25rem] !h-[45rem] 
        text-black
      `}
      style={clipBoardStyling.style}
    >
      <b className="text-[1.5rem] font-bold uppercase mb-[1rem] text-center w-full">
        Índice
      </b>

      <ul className="flex flex-col justify-start items-start w-full h-full gap-[0.5rem] overflow-y-auto list-inside list-disc">
        {renderIndexItems}
      </ul>
    </div>
  );
};
