import css from "./LogoutBtn.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import ModalApproveAction from "../ModalApproveAction/ModalApproveAction";

export default function LogoutBtn({ onLogout, className }) {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isHome = location.pathname === "/home";
  const isYellow = location.pathname !== "/home";

  const btnClass = `
  ${css.btn}
  ${isYellow ? css.btnYellow : ""}
  ${isHome ? css.btnHome : ""}
`;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    onLogout();
    closeModal();
  };

  return (
    <>
      <button className={`${btnClass} ${className}`} onClick={openModal}>
        Log out
      </button>

      {isModalOpen && (
        <ModalApproveAction onClose={closeModal} onApprove={handleLogout} />
      )}
    </>
  );
}
