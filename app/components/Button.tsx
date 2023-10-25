interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button: React.FC<Props> = ({ label }) => (
  <button
    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
    className={`
        bg-[#FFEC65] hover:filter hover:brightness-125 transition-all
        text-black font-bold text-[1.75rem] uppercase
        active:transform active:translate-y-1
        flex justify-center items-center 
        w-[15rem] h-[5rem] rounded-full
    `}
  >
    {label}
  </button>
);
