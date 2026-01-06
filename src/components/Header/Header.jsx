import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isMain = location.pathname === "/";

  return (
    <header className={`${css.header} ${isMain ? css.headerMain : ""}`}>
      <div className={css.container}>
        <Logo className={css.logo} />
      </div>
    </header>
  );
}
