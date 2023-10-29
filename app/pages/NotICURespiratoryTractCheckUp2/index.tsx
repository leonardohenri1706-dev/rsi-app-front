import { useState } from "react";

import {
  RadioWithLabelImageAndCaption,
  BaseLayout,
  Button,
} from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const NotICURespiratoryTractCheckUp2: React.FC = () => {
  const { goToNotICURespiratoryTractCheckUp1, goToPositioning } = useRoutes();

  const [mallampati, setMallampati] = useState("");

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!h-[75%] overflow-hidden !pt-[1rem] !lg:pt-[0.25rem]">
        <RadioWithLabelImageAndCaption
          label="Classificação de Mallampati"
          options={[
            {
              caption: "Palato mole, fauce, úvula e pilares visíveis",
              imageSrc: "/Mallampati1.png",
              label: "Classe I",
            },
            {
              caption: "Palato mole, fauce e úvula visíveis",
              imageSrc: "/Mallampati2.png",
              label: "Classe II",
            },
            {
              caption: "Palato mole e base da úvula visíveis",
              imageSrc: "/Mallampati3.png",
              label: "Classe III",
            },
            {
              caption: "Apenas palato duro visível",
              imageSrc: "/Mallampati4.png",
              label: "Classe IV",
            },
          ]}
          onChange={setMallampati}
          value={mallampati}
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToNotICURespiratoryTractCheckUp1} label="Voltar" />

        <Button onClick={goToPositioning} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
