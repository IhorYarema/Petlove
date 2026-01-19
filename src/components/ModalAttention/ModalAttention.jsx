import css from "./ModalAttention.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";

export default function ModalAttention({ className, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const closeByBackdrop = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <div
      className={`${css.backdrop} ${className} ${isClosing ? css.closing : ""}`}
      onClick={closeByBackdrop}
    >
      <div
        className={`${css.modal} ${isClosing ? css.closing : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={css.closeBtn} onClick={closeModal}>
          <Icon className={css.iconClose} name="cross-small" size={24} />
        </button>
        <div className={css.petAvatar}>🐶</div>
        <h3 className={css.title}>Attention</h3>
        <p className={css.text}>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </p>
        <div className={css.btnsCont}>
          <NavLink to="/login" end className={`${css.link} ${css.login}`}>
            Log In
          </NavLink>

          <NavLink to="/register" end className={`${css.link} ${css.register}`}>
            Registration
          </NavLink>
        </div>
      </div>
    </div>
  );
}
