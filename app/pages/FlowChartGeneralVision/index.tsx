import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";
import Image from "next/image";

export const FlowChartGeneralVision: React.FC = () => {
  const { goToVortexScheme, goToDifficultIntubation } = useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[0rem] !pb-[3rem] !px-[0.5rem]">
        <Image
          alt="Fluxograma - Visão Geral"
          src="/flow-chart.png"
          height={1000}
          width={1000}
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToVortexScheme} label="Voltar" />

        <Button onClick={goToDifficultIntubation} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
