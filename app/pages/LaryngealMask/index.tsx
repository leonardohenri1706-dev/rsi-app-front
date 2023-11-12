import { useState } from "react";

import { BaseLayout, Button, FlowChartQuestion } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const optionsButtonsClassName =
  "!md:lg:w-[24rem] !md:lg:h-[8rem] !w-[9.5rem] !h-[5rem] !text-[0.7rem] opacity-[0.75]";

const contentStyle = {
  background: "url(/laryngeal-mask.png) no-repeat center center",
  backgroundSize: "contain",
  transform: "rotate(-45deg)",
};

export const LaryngealMask: React.FC = () => {
  const { goToAfterAnesthesicInduction, goToCervicalAccess } = useRoutes();
  const [showText, setShowText] = useState(false);

  const onClick = () => setShowText(true);

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-between !h-[80%] relative">
        <div
          className="w-full h-full absolute top-0 left-0 z-[-1]"
          style={contentStyle}
        />

        <p className="bg-[#90C7BEAA] rounded-[1rem] p-2 lg:text-[1rem] text-[0.8rem]">
          3 tentativas com modelos/tamanhos diferentes​
        </p>

        <FlowChartQuestion question="Resultado após máscara laríngea?" />

        <div
          className="flex flex-row justify-around items-start gap-[0.5rem] lg:gap-[3rem]"
          style={{ paddingBottom: showText ? "0" : "2rem" }}
        >
          <div className="flex flex-col justify-around items-center gap-[0.5rem]">
            <Button
              label="Sucesso ou insucesso com boa ventilação por máscara"
              className={optionsButtonsClassName}
              onClick={onClick}
            />

            {showText && <p>Parar e pensar</p>}
          </div>

          <Button
            label="Insucesso com não-ventilo, não-intubo"
            className={optionsButtonsClassName}
            onClick={goToCervicalAccess}
          />
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToAfterAnesthesicInduction} label="Voltar" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
