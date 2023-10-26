import { InputWithLabel, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const Login: React.FC = () => {
  const { goToForgotPassword, goToRegister, goToPatientType } = useRoutes();

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full h-full gap-[2rem]">
        <InputWithLabel label="E-mail" placeholder="Preencha seu e-mail" />

        <InputWithLabel
          label="Senha"
          placeholder="Preencha sua senha"
          password
        />
      </div>

      <div className="absolute flex items-center justify-around w-[79%] h-[5rem] bottom-[3rem]">
        <Button onClick={goToForgotPassword} label="Recuperar senha" />

        <Button onClick={goToRegister} label="Cadastro" />

        <Button onClick={goToPatientType} label="Entrar" />
      </div>
    </>
  );
};
