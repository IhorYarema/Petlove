import css from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav({ closeMenu = () => {}, className = "" }) {
  return (
    <nav className={`${css.navGroup} ${className}`}>
      <NavLink
        to="/news"
        end
        className={({ isActive }) =>
          `${css.link} ${css.news} ${isActive ? css.active : ""}`
        }
        onClick={closeMenu}
      >
        News
      </NavLink>
      <NavLink
        to="/notices"
        end
        className={({ isActive }) =>
          `${css.link} ${css.notices} ${isActive ? css.active : ""}`
        }
        onClick={closeMenu}
      >
        Find pet
      </NavLink>
      <NavLink
        to="/friends"
        end
        className={({ isActive }) =>
          `${css.link} ${css.friends} ${isActive ? css.active : ""}`
        }
        onClick={closeMenu}
      >
        Our friends
      </NavLink>
    </nav>
  );
}
