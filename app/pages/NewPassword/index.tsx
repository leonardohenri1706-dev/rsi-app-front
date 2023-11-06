import { InputWithLabel, BaseLayout, Button } from "@/app/components";

import { useResetPassword } from "./hooks";

export const NewPassword: React.FC = () => {
  const { doResetPassword, getField, setField } = useResetPassword();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content>
        <InputWithLabel
          placeholder="Preencha sua nova senha"
          onChange={(v) => setField("password", v)}
          value={String(getField("password"))}
          label="Senha *"
          password
        />

        <InputWithLabel
          placeholder="Confirme sua nova senha"
          onChange={(v) => setField("passwordConfirmation", v)}
          value={String(getField("passwordConfirmation"))}
          label="Confirmação da senha *"
          password
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button label="Salvar" onClick={doResetPassword} />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
