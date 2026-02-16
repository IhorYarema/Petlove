import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import AuthNav from "../AuthNav/AuthNav";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Nav from "../Nav/Nav";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import { toast } from "react-toastify";
import { logoutUserThunk } from "../../redux/auth/operations";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();
  const isMain = location.pathname === "/";
  const isHome = location.pathname === "/home";

  const headerClass = `
  ${css.header}
  ${isMain ? css.headerMain : ""}
  ${isHome ? css.headerHome : ""}
`;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUserThunk()).unwrap();
      toast.success("Logout successfull!");
      // dispatch(resetFilters());
    } catch (error) {
      toast.error("Logout error " + error);
    } finally {
      setMenuOpen(false);
      navigate("/login");
    }
  };

  return (
    <header className={headerClass}>
      <div className={css.container}>
        <Logo className={css.logo} />

        <Nav className={css.nav} />
        <div className={css.rightContainer}>
          {isLoggedIn ? (
            <>
              <LogoutBtn className={css.logOutBtn} onLogout={handleLogout} />
            </>
          ) : (
            <>
              <AuthNav className={css.authNav} />
            </>
          )}
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
