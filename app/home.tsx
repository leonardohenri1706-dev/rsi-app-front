"use client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";

import { PageLayout } from "./components";
import pages from "./routes";

import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <BrowserRouter>
        <Routes>
          {pages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={
                <PageLayout
                  title={t(`Index.${page.name}`)}
                  isPrivate={page.isPrivate}
                >
                  <page.Component />
                </PageLayout>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
};

export default Home;
