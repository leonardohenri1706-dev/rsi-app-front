import { InputWithLabel, Button } from "@/app/components";

export const NewPassword: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full h-full gap-[2rem]">
        <InputWithLabel
          label="Senha"
          placeholder="Preencha sua nova senha"
          password
        />

        <InputWithLabel
          label="Senha"
          placeholder="Confirme sua nova senha"
          password
        />
      </div>

      <div className="absolute flex items-center justify-around w-[79%] h-[5rem] bottom-[3rem]">
        <Button label="Salvar" />
      </div>
    </>
  );
};
