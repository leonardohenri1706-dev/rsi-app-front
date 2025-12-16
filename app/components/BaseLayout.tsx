import {
  BaseButtonsContainer as Buttons,
  BaseContentContainer as Content,
} from ".";

interface Props {
  children: React.ReactNode;
}

const Root: React.FC<Props> = ({ children }) => (
  <div className="flex flex-col min-h-full w-full relative">
    {children}
  </div>
);
export const BaseLayout = { Root, Buttons, Content };
