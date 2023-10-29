import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const RapidSequenceInduction: React.FC = () => {
  const { goToPreOxygenation } = useRoutes();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[0rem] !pb-[3rem]">
        <div className="flex flex-row h-full w-full text-black font-[1.5rem] items-center justify-center">
          <div className="flex flex-col w-1/2 h-full justify-center gap-[2rem]">
            <span>
              <b>Doses para pacientes com 70kg:</b>
              <p>Alfentanil 15μg/kg (1.5ml) EV</p>
              <p>Etomidato 0,3mg/kg (10ml) EV</p>
              <p>Rocurônio 0.9mg/kg (7ml) EV</p>
            </span>

            <span>
              <b>Alternativa:</b>
              <p>Fentanil 2μg/kg (3ml)</p>
              <p>Cetamina 1.5mg/kg (2ml) </p>
              <p>Succinilcolina 1.5mg/kg (100μg)</p>
            </span>
          </div>

          <div className="flex flex-col w-1/2 h-full justify-center">
            <div className="flex flex-col w-fit h-fit justify-center gap-[2rem] bg-red-300 rounded-3xl p-8">
              <span>
                <b>Atenção</b>
                <p>
                  Se risco de estômago cheio e hipotensão {"\n"}
                  Hipnóticos podem ter efeito menor que 10 minutos (Refazer
                  dose?)
                </p>
              </span>

              <span>
                <b>Cuidado</b>
                <p>
                  Paciente que acorda e faz respiração forçada com glote fechada
                  pode fazer edema agudo de pressão negativa
                </p>
              </span>
            </div>
          </div>
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToPreOxygenation} label="Voltar" />

        <Button onClick={() => {}} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
