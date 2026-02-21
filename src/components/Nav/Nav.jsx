import css from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Nav({ closeMenu = () => {}, className = "" }) {
  const location = useLocation();

  const isHome = location.pathname === "/home";

  const navClass = `
  ${css.navGroup}
  ${isHome ? css.navWhite : css.navYellow}`;

  return (
    <nav className={`${navClass} ${className}`}>
      <NavLink
        to="/news"
        end
        className={
          ({ isActive }) =>
            isActive
              ? `${css.link} ${css.news} ${css.active}`
              : `${css.link} ${css.news}`
          // `${css.link} ${css.news} ${isActive ? css.active : ""}`
        }
        onClick={closeMenu}
      >
        News
      </NavLink>
      <NavLink
        to="/notices"
        end
        className={
          ({ isActive }) =>
            isActive
              ? `${css.link} ${css.notices} ${css.active}`
              : `${css.link} ${css.notices}`
          // `${css.link} ${css.notices} ${isActive ? css.active : ""}`
        }
        onClick={closeMenu}
      >
        Find pet
      </NavLink>
      <NavLink
        to="/friends"
        end
        className={
          ({ isActive }) =>
            isActive
              ? `${css.link} ${css.friends} ${css.active}`
              : `${css.link} ${css.friends}`
          // `${css.link} ${css.friends} ${isActive ? css.active : ""}`
        }
        onClick={closeMenu}
      >
        Our friends
      </NavLink>
    </nav>
  );
}
