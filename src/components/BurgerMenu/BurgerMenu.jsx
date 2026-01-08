import css from "./BurgerMenu.module.css";
import Icon from "../Icon/Icon";
import { useLocation } from "react-router-dom";

export default function BurgerMenu({ open, setOpen, className = "" }) {
  const location = useLocation();
  const isHome = location.pathname === "/home";

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const iconClass = `
    ${css.iconMenu}
    ${isHome ? css.iconMenuWhite : ""}
  `;

  return (
    <button
      className={`${open ? css.closeBtn : css.burgerBtn} ${className}`}
      onClick={toggleMenu}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <Icon className={iconClass} name="menu" />
    </button>
  );
}
