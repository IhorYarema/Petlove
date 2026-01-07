import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import AuthNav from "../AuthNav/AuthNav";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useSelector } from "react-redux";

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();
  const isMain = location.pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${css.header} ${isMain ? css.headerMain : ""}`}>
      <div className={css.container}>
        <Logo className={css.logo} />

        <div className={css.rightContainer}>
          <AuthNav className={css.authNav} />
          {/* Mobile burger menu */}
          <BurgerMenu
            open={menuOpen}
            setOpen={setMenuOpen}
            className={css.burgerMenu}
          />
        </div>
        {menuOpen && <MobileMenu setOpen={setMenuOpen} />}
      </div>
    </header>
  );
}
