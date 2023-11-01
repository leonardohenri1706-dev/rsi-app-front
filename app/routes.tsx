import * as Pages from "./pages";

export interface RouteProps {
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
    Component: Pages.Cover,
    name: "Capa",
    path: "/",
    routerName: "goToCover",
  },
  {
    Component: Pages.Login,
    name: "Login",
    path: "/login",
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
    Component: Pages.RespiratoryTractCheckUp,
    indexName: "Avaliação das vias aéreas",
    name: "Avaliação das vias aéreas",
    path: "/respiratory-tract-check-up",
    routerName: "goToRespiratoryTractCheckUp",
    indexed: true,
  },
  {
    Component: Pages.RespiratoryTractCheckUpMallampati,
    indexName: "Avaliação das vias aéreas - Mallampati",
    name: "Avaliação das vias aéreas - Mallampati",
    path: "/respiratory-tract-check-up-mallampati",
    routerName: "goToRespiratoryTractCheckUpMallampati",
    indexed: true,
  },
  {
    Component: Pages.RespiratoryTractCheckUpImages,
    indexName: "Avaliação das vias aéreas - Imagens",
    name: "Avaliação das vias aéreas - Imagens",
    path: "/respiratory-tract-check-up-images",
    routerName: "goToRespiratoryTractCheckUpImages",
    indexed: true,
  },
  {
    Component: Pages.RespiratoryTractCheckUpMacocha,
    indexName: "Avaliação das vias aéreas - MACOCHA",
    name: "Avaliação das vias aéreas - MACOCHA",
    path: "/respiratory-tract-check-up-macocha",
    routerName: "goToRespiratoryTractCheckUpMacocha",
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
    name: "Fluxograma - Intubação difícil?",
    indexName: "Fluxograma - Intubação difícil?",
    path: "/difficult-intubation",
    routerName: "goToDifficultIntubation",
    indexed: true,
  },
  {
    Component: Pages.DifficultVentilation,
    name: "Fluxograma - Ventilação difícil?",
    indexName: "Fluxograma - Ventilação difícil?",
    path: "/difficult-ventilation",
    routerName: "goToDifficultVentilation",
    indexed: true,
  },
  {
    Component: Pages.RapidSequenceInduction,
    name: "Indução em sequência rápida - Como fazer",
    path: "/rapid-sequence-induction",
    routerName: "goToRapidSequenceInduction",
    indexed: true,
  },
  {
    Component: Pages.AwakeIntubation,
    name: "Intubação acordado - Como fazer",
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
    Component: Pages.RapidSequenceInductionTips,
    name: "Indução em sequência rápida - Doses e dicas",
    path: "/rapid-sequence-induction-tips",
    routerName: "goToRapidSequenceInductionTips",
    indexed: true,
  },
  {
    Component: Pages.SummaryVideo,
    name: "Vídeo resumo",
    path: "/summary-video",
    routerName: "goToSummaryVideo",
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
