import css from "./LogoutBtn.module.css";
import { useLocation } from "react-router-dom";

export default function LogoutBtn({ onLogout, className }) {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const isYellow = location.pathname !== "/home";

  const btnClass = `
  ${css.btn}
  ${isYellow ? css.btnYellow : ""}
  ${isHome ? css.btnHome : ""}
`;

  return (
    <>
      <button className={`${btnClass} ${className}`} onClick={() => onLogout()}>
        Log out
      </button>
    </>
  );
}
