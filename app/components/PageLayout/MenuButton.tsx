import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

import { usePageContext } from "@/app/store";

export const MenuButton: React.FC = () => {
  const { menuIsOpen, setMenuIsOpen } = usePageContext();

  const onClick = () => setMenuIsOpen((old) => !old);

  const Icon = menuIsOpen ? AiOutlineMenuUnfold : AiOutlineMenuFold;

  return (
    <div
      className="absolute top-[1.25rem] left-[1.25rem] cursor-pointer p-2 bg-[#90C7BE] hover:bg-[#62C8B8] rounded-md transition-all active:translate-y-1"
      onClick={onClick}
    >
      <Icon className="text-black text-[1.5rem]" />
    </div>
  );
};
