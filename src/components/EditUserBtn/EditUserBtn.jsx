import css from "./EditUserBtn.module.css";
// import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ModalEditUser from "../ModalEditUser/ModalEditUser";
import Icon from "../Icon/Icon";

export default function EditUserBtn({ user, className = "" }) {
  //   const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen} className={`${css.btnEdit} ${className}`}>
        <Icon className={css.iconEdit} name="edit" size={18} />
      </button>

      {isOpen && <ModalEditUser user={user} onClose={handleClose} />}
    </>
  );
}
