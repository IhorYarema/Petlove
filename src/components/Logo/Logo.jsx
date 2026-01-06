import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";
import Icon from "../Icon/Icon";

export default function Logo({ className }) {
  return (
    <NavLink to="/" className={`${css.logo} ${className}`}>
      <Icon className={css.iconLogo} name="logo" size={76} />
    </NavLink>
  );
}
