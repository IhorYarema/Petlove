import css from "./MobileMenu.module.css";
import Nav from "../Nav/Nav";
import Icon from "../Icon/Icon";
import { useState } from "react";

export default function MobileMenu({ setOpen }) {
  const [isClosing, setIsClosing] = useState(false);

  const closeMenu = () => {
    setIsClosing(true);

    setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  return (
    <div className={css.backdrop} onClick={closeMenu}>
      <aside
        className={`${css.menu} ${isClosing ? css.closing : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={css.closeBtn} onClick={closeMenu}>
          <Icon className={css.iconClose} name="cross-small" size={32} />
        </button>

        <Nav closeMenu={closeMenu} />
      </aside>
    </div>
  );
}
