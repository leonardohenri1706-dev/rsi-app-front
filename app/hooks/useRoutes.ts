import { useNavigate } from "react-router";

export const useRoutes = () => {
  const navigate = useNavigate();

  return {
    goToForgotPassword: () => navigate("/forgot-password"),
    goToNewPassword: () => navigate("/new-password"),
    goToRegister: () => navigate("/register"),
    goToLogin: () => navigate("/login"),
    goToPatientType: () => navigate("/patient-type"),
    goToNotICURespiratoryTractCheckUp1: () =>
      navigate("/not-icu-respiratory-tract-check-up-1"),
  };
};
