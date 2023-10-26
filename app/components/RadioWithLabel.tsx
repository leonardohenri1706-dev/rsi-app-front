interface Props {
  onChange: (newValue: string) => void;
  options: string[];
  label: string;
  value: string;
}

interface OptionProps {
  onChange: (newValue: string) => void;
  option: string;
  value: string;
}

const Option: React.FC<OptionProps> = ({ option, value, onChange }) => {
  const checkedText = option === value ? "( X )" : "( )";

  return (
    <span
      className="flex items-center justify-start gap-[1rem] cursor-pointer"
      onClick={() => onChange(option)}
    >
      <p>{checkedText}</p>

      <p>{option}</p>
    </span>
  );
};

export const RadioWithLabel: React.FC<Props> = ({
  onChange,
  options,
  label,
  value,
}) => {
  const renderOptions = options.map((option) => (
    <Option option={option} value={value} onChange={onChange} key={option} />
  ));

  return (
    <div className="text-black text-[1.5rem] w-full relative">
      <b className="ml-[1rem]">{label}</b>

      <div className="flex items-center justify-around w-full gap-[1rem] mt-[1rem]">
        {renderOptions}
      </div>
    </div>
  );
};
