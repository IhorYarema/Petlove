import css from "./MobileMenu.module.css";
import Nav from "../Nav/Nav";
import AuthNav from "../AuthNav/AuthNav";
import Icon from "../Icon/Icon";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import { toast } from "react-toastify";
import { logoutUserThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

export default function MobileMenu({ setOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isClosing, setIsClosing] = useState(false);

  const closeMenu = () => {
    setIsClosing(true);

    setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutUserThunk()).unwrap();
      toast.success("Logout successfull!");
      // dispatch(resetFilters());
    } catch (error) {
      toast.error("Logout error " + error);
    } finally {
      navigate("/login");
    }
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
