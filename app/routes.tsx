import * as Pages from "./pages";

interface RouteProps {
  Component: React.PropsWithChildren<any>;
  indexName?: string;
  indexed?: boolean;
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
    indexed: true,
  },
  {
    Component: Pages.NotICURespiratoryTractCheckUp1,
    indexName: "Avaliação das vias aéreas não UTI 1",
    name: "Avaliação das vias aéreas",
    path: "/not-icu-respiratory-tract-check-up-1",
    indexed: true,
  },
  {
    Component: Pages.NotICURespiratoryTractCheckUp2,
    indexName: "Avaliação das vias aéreas não UTI 2",
    name: "Avaliação das vias aéreas",
    path: "/not-icu-respiratory-tract-check-up-2",
    indexed: true,
  },
  {
    Component: Pages.ICURespiratoryTractCheckUp1,
    indexName: "Avaliação das vias aéreas UTI 1",
    name: "Avaliação das vias aéreas",
    path: "/icu-respiratory-tract-check-up-1",
    indexed: true,
  },
  {
    Component: Pages.ICURespiratoryTractCheckUp2,
    indexName: "Avaliação das vias aéreas UTI 2",
    name: "Avaliação das vias aéreas",
    path: "/icu-respiratory-tract-check-up-2",
    indexed: true,
  },
  {
    Component: Pages.Positioning,
    name: "Posicionamento",
    path: "/positioning",
    indexed: true,
  },
  {
    Component: Pages.PreOxygenation,
    name: "Pré-oxigenação",
    path: "/pre-oxygenation",
    indexed: true,
  },
  {
    Component: Pages.RapidSequenceInduction,
    name: "Indução em sequência rápida",
    path: "/rapid-sequence-induction",
    indexed: true,
  },
  {
    Component: Pages.AwakeIntubation,
    name: "Intubação acordado",
    path: "/awake-intubation",
    indexed: true,
  },
];

export default pages;
