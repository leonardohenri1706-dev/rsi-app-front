import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const SummaryVideo: React.FC = () => {
  const { goToRapidSequenceInductionTips, goToWhatAboutAnesthetists } =
    useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[0rem]">
        <video className="!w-full !h-full" autoPlay controls>
          <source src="/pre-oxygenation.mp4" type="video/mp4" />
        </video>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToRapidSequenceInductionTips} label="Voltar" />

        <Button onClick={goToWhatAboutAnesthetists} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
