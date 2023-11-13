import Image from "next/image";

import { ListItemProps } from "./interfaces";
import { TipsPopover } from "./TipsPopover";

export const listItems: ListItemProps[] = [
  { text: "O₂ nasal 3L / min - dormiu? - 15 L/min" },
  { text: "Dorso + 30°" },
  {
    text: "Pré-oxigenação 10-15L por 5'",
    ExtraContent: (
      <Image
        className="rounded-[1rem]"
        src="/ambu.jpeg"
        width={300}
        height={300}
        alt="Ambu"
      />
    ),
  },
  {
    text: "Drogas IV: alfentanil 15μg/kg ou fentanil 3 μg/kg + etomidato 0,3 mg/kg ou ketamina 1 mg/kg + rocurônio 0,9-1,2 mg/kg ou succinilcolina 1 mg/kg. Risco de hipotensão!!! Acordou? Repetir 1/3 da dose.",
    ExtraContent: <TipsPopover />,
  },
  { text: "Evitar ventilação sob máscara" },
  {
    text: "Selick???",
    ExtraContent: (
      <Image
        className="rounded-[1rem]"
        src="/selick.jpeg"
        width={300}
        height={300}
        alt="Selick"
      />
    ),
  },
  {
    text: "Intubação traqueal (IOT) 3x; máscara laríngea (ML) 3x; crico se dessaturação​",
  },
];
