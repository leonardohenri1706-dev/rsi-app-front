import { useTranslation } from "react-i18next";
import { useState } from "react";

import { BaseLayout, Button, FlowChartQuestion } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const optionsButtonsClassName =
  "!md:lg:w-[24rem] !md:lg:h-[8rem] !w-[9.5rem] !h-[5rem] !text-[0.7rem] opacity-[0.75]";

const contentStyle = {
  background: "url(/laryngeal-mask.png) no-repeat center center",
  backgroundSize: "contain",
  transform: "rotate(-45deg)",
};

export const LaryngealMask: React.FC = () => {
  const { goToAfterAnesthesicInduction, goToCervicalAccess } = useRoutes();
  const [showText, setShowText] = useState(false);
  const { t } = useTranslation("common");

  const onClick = () => setShowText(true);

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-between !h-[80%] relative">
        <div
          className="w-full h-full absolute top-0 left-0 z-[-1]"
          style={contentStyle}
        />

        {/* Caption for Laryngeal Mask */}
        <p className="absolute left-1/2 transform -translate-x-1/2 top-1/2 mt-[6rem] text-sm font-bold text-gray-600 bg-white/50 px-2 rounded z-0">
          I-gel®
        </p>

        <p className="bg-[#90C7BEAA] rounded-[1rem] p-2 lg:text-[1rem] text-[0.8rem]">
          {t("Pages.LaryngealMask.Content")}
        </p>

        <FlowChartQuestion question={t("Pages.LaryngealMask.Question")} />

        <div
          className="flex flex-row justify-around items-start gap-[0.5rem] lg:gap-[3rem]"
          style={{ paddingBottom: showText ? "0" : "2rem" }}
        >
          <div className="flex flex-col justify-around items-center gap-[0.5rem]">
            <Button
              label={t("Pages.LaryngealMask.Success")}
              className={optionsButtonsClassName}
              onClick={onClick}
            />

            {showText && <p>{t("Pages.LaryngealMask.StopAndThink")}</p>}
          </div>

          <Button
            label={t("Pages.LaryngealMask.Failure")}
            className={optionsButtonsClassName}
            onClick={goToCervicalAccess}
          />
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button
          onClick={goToAfterAnesthesicInduction}
          label={t("Navigation.GoBack")}
        />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
