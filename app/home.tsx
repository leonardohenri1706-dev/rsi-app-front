"use client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useMemo } from "react";

import { PageLayout } from "./components";
import pages from "./routes";

import "react-toastify/dist/ReactToastify.css";

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
    <>
      <BrowserRouter>
        <Routes>{Pages}</Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
};

export default Home;
