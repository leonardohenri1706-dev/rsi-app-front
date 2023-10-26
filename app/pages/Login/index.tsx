import { InputWithLabel, BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const Login: React.FC = () => {
  const { goToForgotPassword, goToRegister, goToPatientType } = useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content>
        <InputWithLabel label="E-mail" placeholder="Preencha seu e-mail" />

        <InputWithLabel
          label="Senha"
          placeholder="Preencha sua senha"
          password
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToForgotPassword} label="Recuperar senha" />

        <Button onClick={goToRegister} label="Cadastro" />

        <Button onClick={goToPatientType} label="Entrar" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
