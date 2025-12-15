import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";
import { useTranslation } from "react-i18next";

interface Reference {
  text: string;
  link?: string;
}

const references: Reference[] = [
  {
    text: "Ahmad I, El-Boghdadly K, Iliff H, Dua G, Higgs A, Huntington M, et al. Difficult Airway Society 2025 guidelines for management of unanticipated difficult tracheal intubation in adults. Br J Anaesth [Internet]. 2025 Nov;",
    link: "https://linkinghub.elsevier.com/retrieve/pii/S0007091225006932",
  },
  {
    text: "Lafleur D, Daenis †, Camire´2 C, Mizubuti GB, Mihm F. The Physiologically Difficult Airway [Internet]. 2024.",
    link: "https://resources.wfsahq.org/anaesthesia-tutorial-of-the-week/",
  },
  {
    text: "Apfelbaum JL, Hagberg CA, Connis RT, Abdelmalak BB, Agarkar M, Dutton RP, et al. 2022 American Society of Anesthesiologists Practice Guidelines for Management of the Difficult Airway. Vol. 136, Anesthesiology. 2022. 31–81 p.",
  },
  {
    text: "Ahmad I, El‐Boghdadly K, Bhagrath R, Hodzovic I, McNarry AF, Mir F, et al. Difficult Airway Society guidelines for awake tracheal intubation (ATI) in adults. Anaesthesia [Internet]. 2020 Apr 14;75(4):509–28.",
    link: "https://onlinelibrary.wiley.com/doi/10.1111/anae.14904",
  },
  {
    text: "Brown CA, Sakles JC, Mick NW. The Walls Manual of Emergency Airway Management. 2018. 726 p.",
  }
];

export const References: React.FC = () => {
  const { goToAboutTheAuthor } = useRoutes();
  const { t } = useTranslation("common");

  const renderReferences = references.map((reference, index) => (
    <li key={index} className="mb-[1rem]">
      <p className="text-black">
        {reference.text}{" "}
        {reference.link && (
          <a
            className="text-blue-500 hover:underline"
            href={reference.link}
            target="_blank"
            rel="noreferrer"
          >
            {reference.link}
          </a>
        )}
      </p>
    </li>
  ));

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[0.25rem] !pb-[1rem]">
        <ul className="h-full w-full text-black text-[0.75rem] items-center justify-center lg:px-4 px-5 list-decimal overflow-y-auto">
          {renderReferences}
        </ul>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToAboutTheAuthor} label={t("Navigation.GoBack")} />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
