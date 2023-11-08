import {
  InputWithLabel,
  RadioWithLabel,
  BaseLayout,
  Button,
} from "@/app/components";
import { IntubationExperience } from "@/app/interfaces";
import { useRoutes } from "@/app/hooks";

import { useRegistration } from "./hooks";

export const Registration: React.FC = () => {
  const { goToLogin } = useRoutes();

  const { doRegistration, setField, getField } = useRegistration();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!h-[75%] overflow-x-hidden overflow-y-auto pb-[2rem]">
        <InputWithLabel
          placeholder="Preencha seu e-mail"
          onChange={(value) => setField("email", value)}
          value={String(getField("email"))}
          label="E-mail *"
        />

        <InputWithLabel
          placeholder="Preencha seu nome"
          onChange={(v) => setField("name", v)}
          value={String(getField("name"))}
          label="Nome *"
        />

        <InputWithLabel
          placeholder="Preencha sua senha"
          onChange={(v) => setField("password", v)}
          value={String(getField("password"))}
          label="Senha *"
          password
        />

        <InputWithLabel
          placeholder="Confirme sua senha"
          label="Confirmação da senha *"
          onChange={(v) => setField("passwordConfirmation", v)}
          value={String(getField("passwordConfirmation"))}
          password
        />

        <RadioWithLabel
          options={[
            IntubationExperience.LESS_THAN_20,
            IntubationExperience.BETWEEN_20_AND_50,
            IntubationExperience.MORE_THAN_50,
          ]}
          optionLabels={["Menos de 20", "20 a 50", "Mais de 50"]}
          label="Experiência com intubação *"
          onChange={(v) => setField("intubation_experience", v)}
          value={String(getField("intubation_experience"))}
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToLogin} label="Voltar" />

        <Button onClick={doRegistration} label="Entrar" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
