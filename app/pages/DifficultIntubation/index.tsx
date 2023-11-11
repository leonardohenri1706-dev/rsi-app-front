import { BaseLayout, Button, FlowChartQuestion } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const flowChartOptionsButtonsClassName =
  "!lg:w-[15rem] !lg:h-[5rem] !w-[12rem] !h-[4rem]";

export const DifficultIntubation: React.FC = () => {
  const {
    goToFlowChartGeneralVision,
    goToRapidSequenceInduction,
    goToDifficultVentilation,
  } = useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[75%]">
        <FlowChartQuestion question="IOT difícil provável?" />

        <div className="flex flex-row justify-center items-center gap-[2rem] lg:gap-[3rem]">
          <Button
            onClick={goToDifficultVentilation}
            className={flowChartOptionsButtonsClassName}
            label="Sim"
          />

          <Button
            onClick={goToRapidSequenceInduction}
            className={flowChartOptionsButtonsClassName}
            label="Não"
          />
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToFlowChartGeneralVision} label="Voltar" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
