import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import NotFound from "./pages/NotFound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "./redux/auth/operations";

import css from "./App.module.css";
import { Toaster } from "react-hot-toast";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NewsPage = lazy(() => import("./pages/NewsPage/NewsPage"));
const FriendsPage = lazy(() => import("./pages/FriendsPage/FriendsPage"));
const NoticesPage = lazy(() => import("./pages/NoticesPage/NoticesPage"));

const RegisterPage = lazy(
  () => import("./pages/RegistrationPage/RegistrationPage"),
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, token]);

  return (
    <div>
      <Header />
      <div className={css.pageContent}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/notices" element={<NoticesPage />} />
            <Route path="/friends" element={<FriendsPage />} />

            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="*" element={<NotFound />} />
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
