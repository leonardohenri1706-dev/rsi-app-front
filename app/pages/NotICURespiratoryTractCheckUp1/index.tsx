import { useState } from "react";

import { RadioWithLabel, BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const NotICURespiratoryTractCheckUp1: React.FC = () => {
  const { goToPatientType } = useRoutes();

  const [hardIntubation, setHardIntubation] = useState("");
  const [apnea, setApnea] = useState("");
  const [mouthOpening, setMouthOpening] = useState("");
  const [tireomentalDistance, setTireomentalDistance] = useState("");
  const [cervicalExtension, setCervicalExtension] = useState("");

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!h-[75%] overflow-x-hidden overflow-y-auto pb-[2rem]">
        <RadioWithLabel
          label="Histórico de intubação difícil"
          options={["Sim", "Não"]}
          onChange={setHardIntubation}
          value={hardIntubation}
        />

        <RadioWithLabel
          label="Histórico de apneia do sono"
          options={["Sim", "Não"]}
          onChange={setApnea}
          value={apnea}
        />

        <RadioWithLabel
          label="Abertura de boca"
          options={["Mais de 3cm", "Menos de 3cm"]}
          onChange={setMouthOpening}
          value={mouthOpening}
        />

        <RadioWithLabel
          label="Histórico de intubação difícil"
          options={["Sim", "Não"]}
          onChange={setTireomentalDistance}
          value={tireomentalDistance}
        />

        <RadioWithLabel
          label="Extensão cervical"
          options={["Maior que 90°", "Menor que 90°"]}
          onChange={setCervicalExtension}
          value={cervicalExtension}
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToPatientType} label="Voltar" />

        <Button onClick={() => {}} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
