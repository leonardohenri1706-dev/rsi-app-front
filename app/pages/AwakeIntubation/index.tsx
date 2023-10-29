import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

const listItems: string[] = [
  "Uso de O₂ nasal suplementar, idealmente com cateter de alto fluxo",
  "Uso de anti-sialogogos como atropina 0.25mg EV",
  "Sedação com algumas drogas, entre elas, remifentanil 1-3ng/ml, midazolam 0.5mg/vez, dexmedetomidina 0.5μg/kg/h até o paciente atingir um grau de sedação ideal sem depressão respiratória",
  "Anestesia tópica de todas as vias aéreas com lidocaína spray até um máximo de 9mg/kg (peso magro)",
  "Bloqueios de vias aéreas (transcrico, laríngeo superior) podem ser realizados",
  "Não há consenso quanto ao equipamento utilizado para a intubação traqueal, talvez o videolaringoscópio",
  'Em caso de falha: reportar-se à "intubação em sequência rápida"',
];

export const AwakeIntubation: React.FC = () => {
  const { goToRapidSequenceInduction } = useRoutes();

  const renderListItems = listItems.map((item, index) => (
    <li key={index} className="text-black">
      {item}
    </li>
  ));

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[1rem] !pb-[3rem]">
        <div className="flex flex-row h-full w-full text-black font-[1.5rem] items-center justify-center">
          <ol className="flex flex-col w-full h-full justify-center gap-[1rem] list-decimal">
            {renderListItems}
          </ol>
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToRapidSequenceInduction} label="Voltar" />

        <Button onClick={() => {}} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
