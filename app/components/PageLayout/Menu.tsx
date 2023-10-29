import { useNavigate } from "react-router";

import { usePageContext } from "@/app/store";
import { useWindowSize } from "@/app/hooks";
import pages from "@/app/routes";

import { clipBoardStyling } from "./Clipboard";

const indexedPages = pages.filter((page) => page.indexed);

const getMenuOpenClassName = (
  menuIsOpen: boolean,
  isMediumOrSmaller: boolean
) => {
  if (!isMediumOrSmaller)
    return menuIsOpen ? "translate-x-0" : "translate-x-full";

  return menuIsOpen ? "translate-x-0" : "-translate-x-full";
};

export const Menu: React.FC = () => {
  const { isMediumOrSmaller } = useWindowSize();
  const navigate = useNavigate();

  const { menuIsOpen } = usePageContext();

  const menuOpenClassName = getMenuOpenClassName(menuIsOpen, isMediumOrSmaller);

  const renderIndexItems = indexedPages.map((page) => (
    <li
      className="text-[1rem] cursor-pointer hover:text-[#01967F] transition-all underline"
      onClick={() => navigate(page.path)}
      key={page.path}
    >
      {page.indexName ?? page.name}
    </li>
  ));

  const zIndexClassName = isMediumOrSmaller ? "!z-[5]" : "!z-[1]";
  const paddingRightClassName = isMediumOrSmaller ? "pr-[1rem]" : "pr-[5rem]";

  return (
    <div
      className={`
        ${clipBoardStyling.className} ${zIndexClassName}
        ${menuOpenClassName} transition-all duration-500
        py-[1rem] pl-[1rem] ${paddingRightClassName}
        lg:top-[2.5rem] lg:-left-[20rem] top-[4rem] left-[0]
        flex flex-col justify-start items-center
        !w-[25rem] !h-[42rem] !lg:h-[45rem] !absolute
        text-black
      `}
      style={clipBoardStyling.style}
    >
      <b className="text-[1.5rem] font-bold uppercase mb-[1rem] text-center w-full">
        Índice
      </b>

      <ul className="flex flex-col justify-start items-start w-full h-full gap-[0.5rem] overflow-y-auto lg:overflow-hidden lg:hover:overflow-y-auto list-inside list-disc">
        {renderIndexItems}
      </ul>
    </div>
  );
};
