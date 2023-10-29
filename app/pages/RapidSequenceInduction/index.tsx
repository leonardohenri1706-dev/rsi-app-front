import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

const listItems: string[] = [
  "Catéter tipo óculos 3L/min até o paciente dormir, quando o fluxo muda para 15L/min (oxigenação apneica)",
  "Dorso inclinado 30°",
  "Pré-oxigenação com 10-15L/min por 5 minutos com sistema bolsa-válvula-máscara",
  "Indução com drogas de duração menor ou reversão fácil: alfentanil 15μg/kg ou fentanil 3μg/kg, propofol 1,5-2mg/kg ou etomidato 0,3mg/kg, succinilcolina 1mg/kg ou rocurônio 0,9-1,2mg/kg. Refazer dose menor se necessário",
  "Não ventilar, se possível (dessaturação obriga ventilação). Sellick??​",
  "Intubação traqueal: 3 tentativas",
  "Máscara laríngea: 3 tentativas​",
  "Acesso cervical: cricotireoidostomia, por exemplo​",
];

export const RapidSequenceInduction: React.FC = () => {
  const { goBack, goToAfterAnesthesicInduction } = useRoutes();

  const renderListItems = listItems.map((item, index) => (
    <li key={index} className="text-black">
      {item}
    </li>
  ));

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[90%] !lg:h-[80%] !pt-[0rem] !lg:pt-[1rem] !pb-[3rem]">
        <div className="flex flex-row h-full w-full text-black text-[0.875rem] lg:text-[1.125rem] items-center justify-center px-5 lg:px-0">
          <ol className="flex flex-col w-full h-full justify-center gap-[1rem] list-decimal">
            {renderListItems}
          </ol>
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goBack} label="Voltar" />

        <Button onClick={goToAfterAnesthesicInduction} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
