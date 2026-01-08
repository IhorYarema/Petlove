import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import css from "./Logo.module.css";
import Icon from "../Icon/Icon";

export default function Logo({ className }) {
  const location = useLocation();
  const isMain = location.pathname === "/";
  const isHome = location.pathname === "/home";

  let logoName = "logo";

  if (isMain) {
    logoName = "logomain";
  } else if (isHome) {
    logoName = "logo-white";
  }

  return (
    <NavLink to="/home" className={`${css.logo} ${className}`}>
      <Icon
        className={`${css.iconLogo} ${css.iconMainLogo}`}
        name={logoName}
        size={76}
      />
    </NavLink>
  );
}
