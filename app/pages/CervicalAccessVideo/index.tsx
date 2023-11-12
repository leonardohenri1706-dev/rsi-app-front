import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const CervicalAccessVideo: React.FC = () => {
  const { goToSummaryVideo, goToCervicalAccess } = useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[1rem]">
        <video className="!w-full !h-full" autoPlay controls>
          <source src="/cervical-access.mp4" type="video/mp4" />
        </video>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToCervicalAccess} label="Voltar" />

        <Button onClick={goToSummaryVideo} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
