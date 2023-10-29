import { useNavigate } from "react-router";

import type { RouteProps } from "@/app/routes";
import { usePageContext } from "@/app/store";
import { useWindowSize } from "@/app/hooks";

interface Props {
  page: RouteProps;
}

export const MenuIndexItem: React.FC<Props> = ({ page }) => {
  const { setMenuIsOpen } = usePageContext();
  const { isSmall } = useWindowSize();
  const navigate = useNavigate();

  const { indexName, name, path } = page;

  const onClick = () => {
    if (isSmall) setMenuIsOpen(false);
    navigate(path);
  };

  return (
    <li
      className="text-[1rem] cursor-pointer hover:text-[#01967F] transition-all underline"
      onClick={onClick}
    >
      {indexName ?? name}
    </li>
  );
};
