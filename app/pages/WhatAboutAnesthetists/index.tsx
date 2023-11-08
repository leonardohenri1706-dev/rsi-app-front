import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const WhatAboutAnesthetists: React.FC = () => {
  const { goToSummaryVideo, goToAboutTheAuthor } = useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[1rem] !pb-[3rem]">
        <div className="flex flex-row h-full w-full text-black text-[1rem] items-center justify-center lg:px-4 px-5">
          <p className="text-black">
            Não há grandes diferenças, apenas em cirurgias programadas a
            intubação pode ser cancelada (diferente de insuficiência
            respiratória, parada cardíaca, etc) através da reversão de drogas
            utilizadas. A indução em sequência rápida não é obrigatória em
            pacientes compensados
          </p>
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToSummaryVideo} label="Voltar" />

        <Button onClick={goToAboutTheAuthor} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
