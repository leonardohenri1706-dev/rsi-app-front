import { useState } from "react";

import { InputWithLabel, BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const NewPassword: React.FC = () => {
  const { goToLogin } = useRoutes();

  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  return (
    <BaseLayout.Root>
      <BaseLayout.Content>
        <InputWithLabel
          placeholder="Preencha sua nova senha"
          onChange={setPassword}
          value={password}
          label="Senha"
          password
        />

        <InputWithLabel
          placeholder="Confirme sua nova senha"
          onChange={setPasswordConfirmation}
          value={passwordConfirmation}
          label="Confirmação da senha"
          password
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button label="Salvar" onClick={goToLogin} />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
