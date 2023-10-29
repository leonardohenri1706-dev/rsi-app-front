import * as Pages from "./pages";

interface RouteProps {
  Component: React.PropsWithChildren<any>;
  routerName: string;
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
    routerName: "goToForgotPassword",
  },
  {
    Component: Pages.Login,
    name: "Login",
    path: "/",
    routerName: "goToLogin",
    indexed: true,
  },
  {
    Component: Pages.NewPassword,
    name: "Mudar senha",
    path: "/new-password",
    routerName: "goToNewPassword",
  },
  {
    Component: Pages.Register,
    name: "Cadastro",
    path: "/register",
    routerName: "goToRegister",
  },
  {
    Component: Pages.PatientType,
    name: "Tipo de paciente",
    path: "/patient-type",
    routerName: "goToPatientType",
    indexed: true,
  },
  {
    Component: Pages.NotICURespiratoryTractCheckUp1,
    indexName: "Avaliação das vias aéreas não UTI 1",
    name: "Avaliação das vias aéreas",
    path: "/not-icu-respiratory-tract-check-up-1",
    routerName: "goToNotICURespiratoryTractCheckUp1",
    indexed: true,
  },
  {
    Component: Pages.NotICURespiratoryTractCheckUp2,
    indexName: "Avaliação das vias aéreas não UTI 2",
    name: "Avaliação das vias aéreas",
    path: "/not-icu-respiratory-tract-check-up-2",
    routerName: "goToNotICURespiratoryTractCheckUp2",
    indexed: true,
  },
  {
    Component: Pages.ICURespiratoryTractCheckUp1,
    indexName: "Avaliação das vias aéreas UTI 1",
    name: "Avaliação das vias aéreas",
    path: "/icu-respiratory-tract-check-up-1",
    routerName: "goToICURespiratoryTractCheckUp1",
    indexed: true,
  },
  {
    Component: Pages.ICURespiratoryTractCheckUp2,
    indexName: "Avaliação das vias aéreas UTI 2",
    name: "Avaliação das vias aéreas",
    path: "/icu-respiratory-tract-check-up-2",
    routerName: "goToICURespiratoryTractCheckUp2",
    indexed: true,
  },
  {
    Component: Pages.Positioning,
    name: "Posicionamento",
    path: "/positioning",
    routerName: "goToPositioning",
    indexed: true,
  },
  {
    Component: Pages.PreOxygenation,
    name: "Pré-oxigenação",
    path: "/pre-oxygenation",
    routerName: "goToPreOxygenation",
    indexed: true,
  },
  {
    Component: Pages.RapidSequenceInductionTips,
    name: "Indução em sequência rápida - Dicas",
    path: "/rapid-sequence-induction-tips",
    routerName: "goToRapidSequenceInductionTips",
    indexed: true,
  },
  {
    Component: Pages.InternationalRecommendations,
    name: "Recomendações internacionais",
    path: "/international-recommendations",
    routerName: "goToInternationalRecommendations",
    indexed: true,
  },
  {
    Component: Pages.VortexScheme,
    name: "Esquema Vortex",
    path: "/vortex-scheme",
    routerName: "goToVortexScheme",
    indexed: true,
  },
  {
    Component: Pages.FlowChartGeneralVision,
    name: "Fluxograma - Visão Geral",
    path: "/flow-chart-general-vision",
    routerName: "goToFlowChartGeneralVision",
    indexed: true,
  },
  {
    Component: Pages.DifficultIntubation,
    name: "Fluxograma para não-anestesistas",
    indexName: "Fluxograma para não-anestesistas - Intubação difícil?",
    path: "/difficult-intubation",
    routerName: "goToDifficultIntubation",
    indexed: true,
  },
  {
    Component: Pages.DifficultVentilation,
    name: "Fluxograma para não-anestesistas",
    indexName: "Fluxograma para não-anestesistas - Ventilação difícil?",
    path: "/difficult-ventilation",
    routerName: "goToDifficultVentilation",
    indexed: true,
  },
  {
    Component: Pages.RapidSequenceInduction,
    name: "Indução em sequência rápida",
    path: "/rapid-sequence-induction",
    routerName: "goToRapidSequenceInduction",
    indexed: true,
  },
  {
    Component: Pages.AwakeIntubation,
    name: "Intubação acordado",
    path: "/awake-intubation",
    routerName: "goToAwakeIntubation",
    indexed: true,
  },
  {
    Component: Pages.AfterAnesthesicInduction,
    name: "Após indução anestésica",
    path: "/after-anesthesic-induction",
    routerName: "goToAfterAnesthesicInduction",
    indexed: true,
  },
  {
    Component: Pages.LaryngealMask,
    name: "Máscara laríngea",
    path: "/laryngeal-mask",
    routerName: "goToLaryngealMask",
    indexed: true,
  },
  {
    Component: Pages.CervicalAccess,
    name: "Acesso Cervical",
    path: "/cervical-access",
    routerName: "goToCervicalAccess",
    indexed: true,
  },
  {
    Component: Pages.WhatAboutAnesthetists,
    name: "E para anestesistas?",
    path: "/what-about-anesthetists",
    routerName: "goToWhatAboutAnesthetists",
    indexed: true,
  },
];

export default pages;
