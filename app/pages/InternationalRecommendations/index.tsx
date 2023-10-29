import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const InternationalRecommendations: React.FC = () => {
  const { goToAwakeIntubation } = useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[1rem] !pb-[3rem]">
        <div className="flex flex-col h-full w-full text-black font-[1.5rem] items-start justify-center gap-[1rem]">
          <p>
            Duas ou três tentativas com diferentes laringoscópios: comum,
            videolaringoscópio, etc
          </p>

          <p>
            Se falha, duas ou três tentativas com máscaras laríngeas diferentes
          </p>

          <b className="mt-[1rem]">Situações</b>

          <ol className="flex flex-col w-full justify-center gap-[0.5rem] list-decimal">
            <li>Ventilação possível: parar e pensar</li>
            <li>
              Ventilação impossível: acesso cervical (cricotireoidostomia ou
              traqueostomia)
            </li>
          </ol>
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToAwakeIntubation} label="Voltar" />

        <Button onClick={() => {}} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
