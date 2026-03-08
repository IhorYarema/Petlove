import css from "./ModalEditUser.module.css";
import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
// import { useDispatch, useSelector } from "react-redux";

export default function ModalEditUser({ className, onClose }) {
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

        <h3 className={css.title}>Edit information</h3>
        <img className={css.avatar} />
      </div>
    </div>
  );
}
