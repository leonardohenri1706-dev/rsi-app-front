import { InputWithLabel, BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

import { useLogin } from "./hooks";

export const Login: React.FC = () => {
  const { goToForgotPassword, goToRegistration } = useRoutes();

  const { email, doLogin, password, setEmail, setPassword } = useLogin();

  const passwordOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") doLogin();
  };

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!pt-[6rem]">
        <InputWithLabel
          placeholder="Preencha seu e-mail"
          onChange={setEmail}
          label="E-mail *"
          value={email}
        />

        <InputWithLabel
          onKeyDown={passwordOnKeyDown}
          placeholder="Preencha sua senha"
          onChange={setPassword}
          value={password}
          label="Senha *"
          password
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToForgotPassword} label="Recuperar senha" />

        <Button onClick={goToRegistration} label="Cadastro" />

        <Button onClick={doLogin} label="Entrar" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
