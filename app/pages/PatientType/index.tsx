import { useNavigate } from "react-router";

import { Button } from "@/app/components";

const buttonsClassName = "!w-[20rem] !h-[7rem] !font-[2rem]";

export const PatientType: React.FC = () => {
  const navigate = useNavigate();

  const goToFirstPage = () => navigate("/");
  const goBackToLogin = () => navigate("/");

  return (
    <>
      <div className="flex flex-col items-center justify-around w-full h-[75%]">
        <Button
          className={buttonsClassName}
          onClick={goBackToLogin}
          label="Paciente UTI"
        />

        <Button
          className={buttonsClassName}
          onClick={goToFirstPage}
          label="Paciente Não UTI"
        />
      </div>
    </>
  );
};
