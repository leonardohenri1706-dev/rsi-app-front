import { InputWithLabel, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const NewPassword: React.FC = () => {
  const { goToLogin } = useRoutes();

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full h-full gap-[2rem]">
        <InputWithLabel
          label="Senha"
          placeholder="Preencha sua nova senha"
          password
        />

        <InputWithLabel
          label="Confirmação da senha"
          placeholder="Confirme sua nova senha"
          password
        />
      </div>

      <div className="absolute flex items-center justify-around w-[79%] h-[5rem] bottom-[3rem]">
        <Button label="Salvar" onClick={goToLogin} />
      </div>
    </>
  );
};
