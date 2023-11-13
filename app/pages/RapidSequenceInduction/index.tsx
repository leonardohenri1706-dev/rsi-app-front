import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";
import { listItems } from "./listItems";
import { ListItem } from "./ListItem";

const useGoToLastPage = () => {
  const {
    goToDifficultVentilation,
    goToDifficultIntubation,
    goToAwakeIntubation,
  } = useRoutes();

  return () => {
    const difficultIntubation = localStorage.getItem("isDifficultIntubation");
    if (difficultIntubation === "false") return goToDifficultIntubation();

    const difficultVentilation = localStorage.getItem("isDifficultVentilation");
    if (difficultVentilation === "false") return goToDifficultVentilation();

    return goToAwakeIntubation();
  };
};

export const RapidSequenceInduction: React.FC = () => {
  const { goToAfterAnesthesicInduction } = useRoutes();
  const goToLastPage = useGoToLastPage();

  const renderListItems = listItems.map((item, index) => (
    <ListItem key={index} item={item} index={index} />
  ));

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[79%] !lg:h-[79%] !pt-[0.5rem] !lg:pt-[1rem] !pb-0 text-black text-[0.875rem] px-5 lg:px-2 !overflow-y-hidden">
        <ol className="flex flex-col w-full h-full gap-[1rem] list-decimal overflow-y-auto pt-[1rem]">
          {renderListItems}
        </ol>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToLastPage} label="Voltar" />

        <Button onClick={goToAfterAnesthesicInduction} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
