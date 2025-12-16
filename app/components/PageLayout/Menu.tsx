import React from "react";
import { usePageContext } from "@/app/store";
import { useWindowSize } from "@/app/hooks";
import pages from "@/app/routes";

import { clipBoardStyling } from "./Clipboard";
import { MenuIndexItem } from "./MenuIndexItem";
import { useTranslation } from "react-i18next";

const indexedPages = pages.filter((page) => page.indexed);

export const Menu: React.FC = () => {
  const { isMediumOrSmaller } = useWindowSize();
  const { menuIsOpen } = usePageContext();
  const { t } = useTranslation("common");

  // Simplified logic:
  // Mobile: Translate 0 (visible) or -full (hidden).
  // Desktop: Translate 0 (visible) or -full (hidden).
  // ALWAYS Z-Index high to be seen.

  const isOpen = menuIsOpen;

  const transformClass = isOpen ? "translate-x-0" : "-translate-x-full";

  const renderIndexItems = indexedPages.map((page) => (
    <MenuIndexItem page={page} key={page.path} />
  ));

  return (
    <div
      className={`
        ${clipBoardStyling.className} 
        !z-[50]
        fixed lg:absolute
        top-0 left-0
        !h-[100dvh] lg:!h-[35rem]
        !w-[80vw] lg:!w-[25rem]
        lg:top-[2.5rem]
        lg:left-[5rem]
        ${transformClass} 
        duration-500 transition-transform
        py-[1rem] pl-[1rem] pr-[1rem]
        flex flex-col justify-start items-center
        text-black
        shadow-2xl
      `}
      style={{ ...clipBoardStyling.style }}
    >
      <b className="text-[1rem] lg:text-[1.5rem] font-bold uppercase mb-[1rem] text-center w-full">
        {t("Components.PageLayout.Menu.Index")}
      </b>

      <ol className="flex flex-col justify-start items-start w-full h-full gap-[0.5rem] overflow-y-auto lg:overflow-hidden lg:hover:overflow-y-auto list-inside list-decimal">
        {renderIndexItems}
      </ol>
    </div>
  );
};
