interface Props {
  children: React.ReactNode;
  className?: string;
}

export const BaseButtonsContainer: React.FC<Props> = ({
  children,
  className,
}) => (
  <div
    className={`flex items-center justify-around w-full min-h-[5rem] py-4 mt-auto px-[0.5rem] md:px-[1rem] lg:px-[2rem] ${className}`}
  >
    {children}
  </div>
);
