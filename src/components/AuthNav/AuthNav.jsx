import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

export default function AuthNav({ closeMenu = () => {}, className = "" }) {
  return (
    <div className={`${css.authNav} ${className}`}>
      <NavLink
        to="login"
        end
        className={({ isActive }) =>
          `${css.link} ${css.login} ${isActive ? css.active : ""}`
        }
        onClick={closeMenu}
      >
        Log In
      </NavLink>

      <NavLink
        to="/register"
        end
        className={({ isActive }) =>
          `${css.link} ${css.register} ${isActive ? css.active : ""}`
        }
        onClick={closeMenu}
      >
        Registration
      </NavLink>
    </div>
  );
}
