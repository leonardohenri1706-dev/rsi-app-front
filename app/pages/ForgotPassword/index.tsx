import { InputWithLabel, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const ForgotPassword: React.FC = () => {
  const { goToLogin, goToPatientType } = useRoutes();

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full h-full gap-[2rem]">
        <InputWithLabel label="E-mail" placeholder="Preencha seu e-mail" />
      </div>

      <div className="absolute flex items-center justify-around w-[79%] h-[5rem] bottom-[3rem]">
        <Button label="Voltar" onClick={goToLogin} />

        <Button label="Enviar" onClick={goToPatientType} />
      </div>
    </>
  );
};
