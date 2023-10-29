import { useNavigate } from "react-router";

export const useRoutes = () => {
  const navigate = useNavigate();

  return {
    goToForgotPassword: () => navigate("/forgot-password"),
    goToNewPassword: () => navigate("/new-password"),
    goToRegister: () => navigate("/register"),
    goToLogin: () => navigate("/"),
    goToPatientType: () => navigate("/patient-type"),
    goToNotICURespiratoryTractCheckUp1: () =>
      navigate("/not-icu-respiratory-tract-check-up-1"),
    goToNotICURespiratoryTractCheckUp2: () =>
      navigate("/not-icu-respiratory-tract-check-up-2"),
    goToICURespiratoryTractCheckUp1: () =>
      navigate("/icu-respiratory-tract-check-up-1"),
    goToICURespiratoryTractCheckUp2: () =>
      navigate("/icu-respiratory-tract-check-up-2"),
    goToPositioning: () => navigate("/positioning"),
    goToPreOxygenation: () => navigate("/pre-oxygenation"),
    goToRapidSequenceInduction: () => navigate("/rapid-sequence-induction"),
    goToAwakeIntubation: () => navigate("/awake-intubation"),
  };
};
