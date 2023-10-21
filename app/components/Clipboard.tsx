interface Props {
  children: React.ReactNode;
}

export const Clipboard = ({ children }: Props) => (
  <div className="flex w-screen h-screen justify-center items-center">
    <div
      className={`
        border border-1 border-black rounded-[40px] 
        flex flex-col justify-start items-center 
        padding-[40px 70px 30px 70px]
        w-[50rem] h-[50rem] 
        bg-[#e6e6e6] 
        z-1
      `}
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
    >
      {children}
    </div>
  </div>
);
