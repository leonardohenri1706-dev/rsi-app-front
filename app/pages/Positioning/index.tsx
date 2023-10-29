import { useState } from "react";

import {
  ImageWithLabelAndCaptionOption,
  BaseLayout,
  Button,
  Option,
} from "@/app/components";
import { useRoutes } from "@/app/hooks";
import { PatientTypeEnum, usePageContext } from "@/app/store";

const imagesOptions: Option[] = [
  {
    imageSrc: "/olfative position.png",
    label: "Posição Olfativa",
    caption: "Travesseiro na região occipital sempre",
  },
  {
    imageSrc: "/ramp position.png",
    label: "Posição Rampa",
    caption: "Obesos e grávidas",
  },
];

export const Positioning: React.FC = () => {
  const {
    goToNotICURespiratoryTractCheckUp2,
    goToICURespiratoryTractCheckUp2,
    goToPreOxygenation,
  } = useRoutes();
  const { patientType } = usePageContext();

  const goBack =
    patientType === PatientTypeEnum.ICU
      ? goToICURespiratoryTractCheckUp2
      : goToNotICURespiratoryTractCheckUp2;

  const renderImages = imagesOptions.map((option) => (
    <ImageWithLabelAndCaptionOption
      withCheckedText={false}
      key={option.label}
      option={option}
      width="w-20rem"
      size={400}
    />
  ));

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!h-[75%] overflow-x-hidden overflow-y-hidden pb-[2rem] !pt-[1rem] !justify-center">
        <div className="flex items-center justify-center text-black text-[1.125rem] gap-[5rem]">
          {renderImages}
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goBack} label="Voltar" />

        <Button onClick={goToPreOxygenation} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
