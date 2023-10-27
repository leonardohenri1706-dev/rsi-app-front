import { useState } from "react";

import {
  ImageWithLabelAndCaptionOption,
  BaseLayout,
  Button,
  Option,
} from "@/app/components";
import { useRoutes } from "@/app/hooks";

const imagesOptions: Option[] = [
  { imageSrc: "/Mallampati4 example.png", label: "Mallampati IV" },
  { imageSrc: "/micrognatia.png", label: "Micrognatia" },
  { imageSrc: "/extensao ruim.png", label: "Extensão ruim" },
  { imageSrc: "/abertura de boca ruim.png", label: "Abertura de boca ruim" },
];

export const ICURespiratoryTractCheckUp2: React.FC = () => {
  const { goToICURespiratoryTractCheckUp1 } = useRoutes();

  const renderImages = imagesOptions.map((option) => (
    <ImageWithLabelAndCaptionOption
      withCheckedText={false}
      key={option.label}
      option={option}
      size={150}
    />
  ));

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!h-[75%] overflow-x-hidden overflow-y-hidden pb-[2rem] !gap-[1rem] !pt-[1rem]">
        <div className="flex flex-wrap items-start justify-center text-black text-[1.125rem] gap-[2rem]">
          {renderImages}
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToICURespiratoryTractCheckUp1} label="Voltar" />

        <Button onClick={() => {}} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
