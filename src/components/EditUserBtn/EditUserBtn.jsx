import css from "./EditUserBtn.module.css";
// import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ModalEditUser from "./ModalEditUser";

export default function EditUserBtn({ user }) {
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
      <button onClick={handleOpen} className={css.btn}>
        Редагувати
      </button>

      {isOpen && <ModalEditUser user={user} onClose={handleClose} />}
    </>
  );
}
