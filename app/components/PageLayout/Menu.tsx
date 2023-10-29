import { usePageContext } from "@/app/store";
import { useWindowSize } from "@/app/hooks";
import pages from "@/app/routes";

import { clipBoardStyling } from "./Clipboard";
import { MenuIndexItem } from "./MenuIndexItem";

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
  const { menuIsOpen } = usePageContext();

  const menuOpenClassName = getMenuOpenClassName(menuIsOpen, isMediumOrSmaller);

  const renderIndexItems = indexedPages.map((page) => (
    <MenuIndexItem page={page} key={page.path} />
  ));

  const zIndexClassName = isMediumOrSmaller ? "!z-[5]" : "!z-[1]";
  const paddingRightClassName = isMediumOrSmaller ? "pr-[1rem]" : "pr-[5rem]";

  return (
    <div
      className={`
        ${clipBoardStyling.className} ${zIndexClassName}
        !w-full md:lg:!w-[25rem] h-[38rem] md:!h-[42rem] !lg:h-[45rem] !absolute
        lg:top-[2.5rem] md:top-[4rem] top-[6rem]
        lg:-left-[20rem] left-[0]
        ${menuOpenClassName} transition-all duration-500
        py-[1rem] pl-[1rem] ${paddingRightClassName}
        flex flex-col justify-start items-center
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
