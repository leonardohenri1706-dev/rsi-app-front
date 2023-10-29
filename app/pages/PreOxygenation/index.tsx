import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const PreOxygenation: React.FC = () => {
  const { goToPositioning } = useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[0.5rem]">
        <video autoPlay controls className="!w-full !h-full">
          <source src="/pre-oxygenation.mp4" type="video/mp4" />
        </video>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToPositioning} label="Voltar" />

        <Button onClick={() => {}} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
