import { useState } from "react";

import {
  InputWithLabel,
  RadioWithLabel,
  Button,
  BaseLayout,
} from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const Register: React.FC = () => {
  const { goToLogin, goToPatientType } = useRoutes();

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [profession, setProfession] = useState<string>("");
  const [experience, setExperience] = useState<string>("");

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!h-[75%] overflow-x-hidden overflow-y-auto pb-[2rem]">
        <InputWithLabel
          placeholder="Preencha seu e-mail"
          onChange={setEmail}
          value={email}
          label="E-mail"
        />

        <InputWithLabel
          placeholder="Preencha seu nome"
          onChange={setName}
          value={name}
          label="Nome"
        />

        <InputWithLabel
          placeholder="Preencha sua senha"
          onChange={setPassword}
          value={password}
          label="Senha"
          password
        />

        <InputWithLabel
          placeholder="Confirme sua senha"
          label="Confirmação da senha"
          onChange={setPasswordConfirmation}
          value={passwordConfirmation}
          password
        />

        <RadioWithLabel
          options={["Médico", "Estudante de medicina"]}
          onChange={setProfession}
          value={profession}
          label="Profissão"
        />

        <RadioWithLabel
          options={["Menos de 20", "20 a 50", "Mais de 50"]}
          label="Experiência com intubação"
          onChange={setExperience}
          value={experience}
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToLogin} label="Voltar" />

        <Button onClick={goToPatientType} label="Entrar" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
