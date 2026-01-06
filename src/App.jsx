import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import css from "./App.module.css";
import { Toaster } from "react-hot-toast";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));

function App() {
  return (
    <div>
      <Header />
      <div className={css.pageContent}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MainPage />} />

            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "rgba(240, 63, 59, 1)",
            color: "#fff",
            zIndex: 999999999999999,
            borderRadius: "12px",
            padding: "12px 18px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
          },
        }}
      />
    </div>
  );
}

export default App;
