import { useState } from "react";

import {
  RadioWithLabel,
  BaseLayout,
  Button,
  InputWithLabel,
} from "@/app/components";
import { useRoutes } from "@/app/hooks";

const tableData = [
  { parameter: "M: Mallampati II ou IV", score: "5" },
  { parameter: "A: Apneia obstrutiva do sono", score: "3" },
  { parameter: "C: Cervical com má extensão", score: "1" },
  { parameter: "O: Abertura de boca menor que  cm", score: "1" },
  { parameter: "C: Coma", score: "1" },
  { parameter: "H: Hipóxia severa (80%)", score: "1" },
  { parameter: "A: Não-anestesista", score: "1" },
];

export const ICURespiratoryTractCheckUp1: React.FC = () => {
  const { goToPatientType, goToICURespiratoryTractCheckUp2 } = useRoutes();

  const [macocha, setMacocha] = useState("");

  const renderTableData = tableData.map(({ parameter, score }) => {
    const [identifier, rest] = parameter.split(":");

    return (
      <tr key={parameter} className="border-b border-black py-1">
        <td className="w-1/2 pl-[2rem] border-r border-black">
          <b>{identifier}:</b>
          {rest}
        </td>
        <td className="w-1/2 text-center">{score}</td>
      </tr>
    );
  });

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!h-[85%] !lg:h-[75%] pb-[2rem] !gap-[1rem] !pt-[2rem]">
        <InputWithLabel
          placeholder="Preencha de acordo com a tabela abaixo"
          label="Classificação MACOCHA"
          onChange={setMacocha}
          value={macocha}
        />

        <div className="lg:overflow-hidden overflow-y-auto">
          <table className="text-black w-full">
            <thead className="text-[1.675rem]">
              <tr className="border-b-2 border-black">
                <th className="border-r border-black w-1/2 text-center">
                  Parâmetro
                </th>
                <th className="w-1/2 text-center">Pontuação</th>
              </tr>
            </thead>

            <tbody className="text-[1.25rem]">{renderTableData}</tbody>
          </table>
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToPatientType} label="Voltar" />

        <Button onClick={goToICURespiratoryTractCheckUp2} label="Próximo" />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
