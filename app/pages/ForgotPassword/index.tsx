import {
  BaseContentContainer,
  BaseButtonsContainer,
  InputWithLabel,
  Button,
} from "@/app/components";
import { useRoutes } from "@/app/hooks";
import { useForgotPassword } from "./hooks";

export const ForgotPassword: React.FC = () => {
  const { goToLogin } = useRoutes();

  const { doForgotPassword, email, setEmail } = useForgotPassword();

  return (
    <>
      <BaseContentContainer>
        <InputWithLabel
          placeholder="Preencha seu e-mail"
          onChange={setEmail}
          label="E-mail *"
          value={email}
        />
      </BaseContentContainer>

      <BaseButtonsContainer>
        <Button label="Voltar" onClick={goToLogin} />

        <Button label="Enviar" onClick={doForgotPassword} />
      </BaseButtonsContainer>
    </>
  );
};
