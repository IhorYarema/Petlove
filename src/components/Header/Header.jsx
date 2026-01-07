import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  const location = useLocation();
  const isMain = location.pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${css.header} ${isMain ? css.headerMain : ""}`}>
      <div className={css.container}>
        <Logo className={css.logo} />

        {/* Mobile burger menu */}
        <BurgerMenu
          open={menuOpen}
          setOpen={setMenuOpen}
          className={css.burgerMenu}
        />
        {menuOpen && <MobileMenu setOpen={setMenuOpen} />}
      </div>
    </header>
  );
}
