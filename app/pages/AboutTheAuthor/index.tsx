import Image from "next/image";

import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const AboutTheAuthor: React.FC = () => {
  const { goToWhatAboutAnesthetists, goToReferences } = useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[1rem] !pb-[3rem]">
        <div className="flex flex-col h-full w-full text-black text-[1rem] gap-[1rem] items-center justify-center lg:px-4 px-5">
          <Image
            style={{ borderRadius: "1rem" }}
            alt="Foto do autor"
            src="/plinio.jpeg"
            height={200}
            width={400}
          />

          <div className="flex flex-col gap-[0.25em] items-center justify-center">
            <p className="text-black">Plínio Holanda - Anestesista</p>
            <a
              className="text-blue-500 hover:underline"
              href="mailto:anestesiaceara@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              anestesiaceara@gmail.com
            </a>
          </div>
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToWhatAboutAnesthetists} label="Voltar" />

        <Button onClick={goToReferences} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
