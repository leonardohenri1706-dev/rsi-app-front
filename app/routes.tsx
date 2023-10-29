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
    path: "/new-password",
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
  {
    Component: Pages.NotICURespiratoryTractCheckUp1,
    name: "Avaliação das vias aéreas",
    path: "/not-icu-respiratory-tract-check-up-1",
  },
  {
    Component: Pages.NotICURespiratoryTractCheckUp2,
    name: "Avaliação das vias aéreas",
    path: "/not-icu-respiratory-tract-check-up-2",
  },
  {
    Component: Pages.ICURespiratoryTractCheckUp1,
    name: "Avaliação das vias aéreas",
    path: "/icu-respiratory-tract-check-up-1",
  },
  {
    Component: Pages.ICURespiratoryTractCheckUp2,
    name: "Avaliação das vias aéreas",
    path: "/icu-respiratory-tract-check-up-2",
  },
  {
    Component: Pages.Positioning,
    name: "Posicionamento",
    path: "/positioning",
  },
  {
    Component: Pages.PreOxygenation,
    name: "Pré-oxigenação",
    path: "/pre-oxygenation",
  },
  {
    Component: Pages.RapidSequenceInduction,
    name: "Indução em sequência rápida",
    path: "/rapid-sequence-induction",
  },
  {
    Component: Pages.AwakeIntubation,
    name: "Intubação acordado",
    path: "/awake-intubation",
  },
];

export default pages;
