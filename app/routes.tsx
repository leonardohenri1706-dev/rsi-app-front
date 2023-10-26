import * as Pages from "./pages";

interface RouteProps {
  Component: React.PropsWithChildren<any>;
  name: string;
  path: string;
}

const pages: RouteProps[] = [
  {
    Component: Pages.ForgotPassword,
    name: "Recuperar senha",
    path: "/forgot-password",
  },
  {
    Component: Pages.Login,
    name: "Login",
    path: "/",
  },
  {
    Component: Pages.NewPassword,
    name: "Mudar senha",
    path: "/change-password",
  },
  {
    Component: Pages.Register,
    name: "Cadastro",
    path: "/register",
  },
  {
    Component: Pages.PatientType,
    name: "Tipo de paciente",
    path: "/patient-type",
  },
];

export default pages;
