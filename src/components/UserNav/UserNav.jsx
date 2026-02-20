import LogoutBtn from "../LogoutBtn/LogoutBtn";
import UserBar from "../UserBar/UserBar";
import css from "./UserNav.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logoutUserThunk } from "../../redux/auth/operations";

export default function UserNav({ className }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUserThunk()).unwrap();
      toast.success("Logout successfull!");
      // dispatch(resetFilters());
    } catch (error) {
      toast.error("Logout error " + error);
    } finally {
      //   setMenuOpen(false);
      navigate("/login");
    }
  };
  return (
    <div className={`${css.wrapper} ${className}`}>
      <LogoutBtn className={css.logOutBtn} onLogout={handleLogout} />
      <UserBar />
    </div>
  );
}
