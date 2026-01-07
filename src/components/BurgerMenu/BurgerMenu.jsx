import css from "./BurgerMenu.module.css";
import Icon from "../Icon/Icon";

export default function BurgerMenu({ open, setOpen, className = "" }) {
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <button
      className={`${open ? css.closeBtn : css.burgerBtn} ${className}`}
      onClick={toggleMenu}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <Icon className={css.iconMenu} name="menu" />
    </button>
  );
}
