import { BsCameraVideo } from "react-icons/bs";

import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

const listItems: string[] = [
  "Técnica lâmina de bisturi-bougie-tubo traqueal 6,0mm​",
  "Técnica por punção​",
];

export const CervicalAccess: React.FC = () => {
  const { goToLaryngealMask, goToCervicalAccessVideo } = useRoutes();

  const renderListItems = listItems.map((item, index) => (
    <li key={index} className="text-black">
      {item}
    </li>
  ));

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[1rem] !pb-[3rem]">
        <div className="flex flex-row h-full w-full text-black text-[1rem] items-center justify-center lg:px-5 px-8">
          <ul className="flex flex-col w-full h-full justify-center gap-[4rem] list-disc">
            <li>
              <b>Cricotireoidostomia (não definitivo)</b>

              <ol className="flex flex-col w-full h-full justify-center gap-[2rem] list-decimal">
                {renderListItems}
              </ol>
            </li>

            <li>
              <b>Traqueostomia (definitivo)</b>
            </li>
          </ul>
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToLaryngealMask} label="Voltar" />

        <Button
          onClick={goToCervicalAccessVideo}
          label={
            <span className="flex flex-row items-center">
              <BsCameraVideo size={20} className="mr-2" />
              Veja o vídeo
            </span>
          }
        />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
