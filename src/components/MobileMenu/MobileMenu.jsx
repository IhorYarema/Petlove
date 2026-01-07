import css from "./MobileMenu.module.css";
import Nav from "../Nav/Nav";
import AuthNav from "../AuthNav/AuthNav";
import Icon from "../Icon/Icon";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function MobileMenu({ setOpen }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
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

        {isLoggedIn ? (
          <>
            <LogoutBtn className={css.logOutBtn} onLogout={handleLogout} />
          </>
        ) : (
          <>
            <AuthNav closeMenu={closeMenu} />
          </>
        )}
      </aside>
    </div>
  );
}
