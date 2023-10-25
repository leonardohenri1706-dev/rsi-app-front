"use client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMemo } from "react";

import { PageLayout } from "./components";
import pages from "./routes";

const Home = () => {
  const Pages = useMemo(
    () =>
      pages.map(({ Component, path, name }) => (
        <Route
          path={path}
          key={path}
          element={
            <PageLayout title={name}>
              <Component />
            </PageLayout>
          }
        />
      )),
    []
  );

  return (
    <BrowserRouter>
      <Routes>{Pages}</Routes>
    </BrowserRouter>
  );
};

export default Home;
