import css from "./ModalApproveAction.module.css";
import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

export default function ModalApproveAction({ className, onClose, onApprove }) {
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

  const modalContent = (
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
        <div className={css.petAvatar}>🐈</div>
        <h3 className={css.title}>Already leaving?</h3>
        <div className={css.btnsCont}>
          <button onClick={onApprove} className={`${css.btn} ${css.yesBtn}`}>
            Yes
          </button>

          <button
            onClick={closeModal}
            className={`${css.btn} ${css.cancelBtn}`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
  return createPortal(modalContent, modalRoot);
}
