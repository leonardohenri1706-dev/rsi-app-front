interface Props {
  children: React.ReactNode;
  className?: string;
}

export const BaseButtonsContainer: React.FC<Props> = ({
  children,
  className,
}) => (
  <div
    className={`absolute flex items-center justify-around w-full h-[5rem] bottom-[3rem] px-[0.5rem] md:px-[1rem] lg:px-[5rem] ${className}`}
  >
    {children}
  </div>
);
