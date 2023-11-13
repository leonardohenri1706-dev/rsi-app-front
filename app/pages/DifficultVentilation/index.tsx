import { BaseLayout, Button, FlowChartQuestion } from "@/app/components";
import { useRoutes } from "@/app/hooks";

import { flowChartOptionsButtonsClassName } from "..";

export const DifficultVentilation: React.FC = () => {
  const {
    goToRapidSequenceInduction,
    goToDifficultIntubation,
    goToAwakeIntubation,
  } = useRoutes();

  const onClickOnYes = () => {
    localStorage.setItem("isDifficultVentilation", "true");
    goToAwakeIntubation();
  };

  const onClickOnNo = () => {
    localStorage.setItem("isDifficultVentilation", "false");
    goToRapidSequenceInduction();
  };

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[75%]">
        <FlowChartQuestion question="Ventilação difícil provável?" />

        <div className="flex flex-row justify-center items-center lg:gap-[3rem] gap-[1.5rem]">
          <Button
            className={flowChartOptionsButtonsClassName}
            onClick={onClickOnYes}
            label="Sim"
          />

          <Button
            className={flowChartOptionsButtonsClassName}
            onClick={onClickOnNo}
            label="Não"
          />
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToDifficultIntubation} label="Voltar" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
