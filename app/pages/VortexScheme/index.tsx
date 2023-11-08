import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";
import Image from "next/image";

const commonTextClassName = "text-gray-500 font-bold text-md absolute";

export const VortexScheme: React.FC = () => {
  const { goToInternationalRecommendations, goToFlowChartGeneralVision } =
    useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-start !h-[90%] !px-[0.5rem] relative">
        <div className="flex flex-col w-full h-[77%] items-center justify-center relative">
          <Image
            src="/vortex-scheme.png"
            alt="Esquema Vortéx"
            height={350}
            width={350}
          />

          <p className={`${commonTextClassName} top-[0rem] lg:-top-[1.25rem]`}>
            Máscara facial
          </p>

          <p
            className={`${commonTextClassName} bottom-[5.5rem] lg:bottom-[4rem] -left-[1rem] lg:md:left-[9%] lg:rotate-[55deg]  rotate-[60deg]`}
          >
            Máscara laríngea
          </p>

          <p
            className={`${commonTextClassName} bottom-[5.5rem] lg:bottom-[4rem] -right-[1rem] lg:md:right-[9%] -lg:rotate-[55deg] -rotate-[60deg]`}
          >
            Tubo traqueal
          </p>

          <p
            className={`${commonTextClassName} !text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          >
            Traqueostomia
          </p>
        </div>

        <p className="text-gray-500 font-bold text-[0.875rem] text-center px-[1rem] mt-2">
          Esquema que busca usar máscara facial, IOT e máscara laríngea para
          evitar acesso cervical
        </p>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToInternationalRecommendations} label="Voltar" />

        <Button onClick={goToFlowChartGeneralVision} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
