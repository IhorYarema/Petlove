import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import NotFound from "./pages/NotFound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "./redux/auth/operations";

import css from "./App.module.css";
import { ToastContainer } from "react-toastify";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NewsPage = lazy(() => import("./pages/NewsPage/NewsPage"));
const FriendsPage = lazy(() => import("./pages/FriendsPage/FriendsPage"));
const NoticesPage = lazy(() => import("./pages/NoticesPage/NoticesPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage"));

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
            <Route path="/profile" element={<ProfilePage />} />

            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </div>
  );
}

export default App;
