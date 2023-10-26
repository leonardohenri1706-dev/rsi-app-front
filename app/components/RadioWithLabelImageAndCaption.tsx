import Image from "next/image";

export interface Option {
  imageSrc: string;
  caption: string;
  label: string;
}

interface Props {
  onChange: (newValue: string) => void;
  options: Option[];
  label: string;
  value: string;
}

interface OptionProps {
  onChange: (newValue: string) => void;
  option: Option;
  value: string;
}

const Option: React.FC<OptionProps> = ({ option, value, onChange }) => {
  const { imageSrc, caption, label } = option;

  const checkedText = label === value ? "( X )" : "( )";

  return (
    <div
      className="flex flex-col items-center justify-start cursor-pointer w-[12rem]"
      onClick={() => onChange(label)}
    >
      <span className="flex items-center justify-start gap-[1rem]">
        <p>{checkedText}</p>

        <p>{label}</p>
      </span>

      <Image src={imageSrc} alt={label + caption} width={100} height={100} />

      <p className="text-center text-[0.875rem] text-[#666]">{caption}</p>
    </div>
  );
};

export const RadioWithLabelImageAndCaption: React.FC<Props> = ({
  onChange,
  options,
  label,
  value,
}) => {
  const renderOptions = options.map((option) => (
    <Option
      onChange={onChange}
      key={option.label}
      option={option}
      value={value}
    />
  ));

  return (
    <div className="text-black text-[1.5rem] w-full relative">
      <b className="ml-[1rem]">{label}</b>

      <div
        className="flex flex-wrap justify-center gap-[2rem]"
        style={{ rowGap: "0.5rem" }}
      >
        {renderOptions}
      </div>
    </div>
  );
};
