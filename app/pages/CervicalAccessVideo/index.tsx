import { useTranslation } from "react-i18next";

import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const CervicalAccessVideo: React.FC = () => {
  const { goToWhatAboutAnesthetists, goToCervicalAccess } = useRoutes();
  const { t } = useTranslation("common");

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[1rem]">
        <video className="!w-full !h-full" autoPlay controls>
          <source src="/cervical-access.mp4" type="video/mp4" />
        </video>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToCervicalAccess} label={t("Navigation.GoBack")} />

        <Button
          onClick={goToWhatAboutAnesthetists}
          label={t("Navigation.Next")}
        />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
