import { BaseLayout, Button, FlowChartQuestion } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const optionsButtonsClassName =
  "!lg:w-[22rem] !lg:h-[7rem] w-[13rem] h-[5rem] !lg:text-[1.25rem] text-[0.75rem]";

export const LaryngealMask: React.FC = () => {
  const { goBack, goToCervicalAccess } = useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[75%]">
        <p className="text-[1rem] lg:text-[1.5rem] lg:px-0 px-5">
          3 tentativas com modelos/tamanhos diferentes​
        </p>

        <FlowChartQuestion question="Resultado?" />

        <div className="flex flex-row justify-center items-center gap-[0.5rem] lg:gap-[3rem]">
          <Button
            className={optionsButtonsClassName}
            onClick={() => alert("Parar e pensar")} // TODO: Understand and implement this part
            label="Sucesso ou insucesso com boa ventilação por máscara"
          />

          <Button
            className={optionsButtonsClassName}
            onClick={goToCervicalAccess}
            label="Insucesso com não-ventilo, não-intubo"
          />
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goBack} label="Voltar" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
