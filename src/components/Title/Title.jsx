import css from "./Title.module.css";
import { useLocation } from "react-router-dom";

export default function Title({ className = "" }) {
  const location = useLocation();
  //   const isRegister = location.pathname === "/register";
  //   const isLogin = location.pathname === "/login";

  const titles = {
    "/register": "Registration",
    "/login": "Log in",
  };

  const title = titles[location.pathname] || "";

  return <h2 className={`${css.title} ${className}`}>{title}</h2>;
}
