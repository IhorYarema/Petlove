import Icon from "../Icon/Icon";
import css from "./UserBlock.module.css";
import ModalEditUser from "../ModalEditUser/ModalEditUser";
import { useState } from "react";

export default function UserCard({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.userBlock}>
      <div className={css.userContainer}>
        <p>User</p> <Icon className={css.iconUser} name="user" size={18} />
      </div>
      <div className={css.infoContainer}>
        {!user.avatar ? (
          <div className={css.avatarContainer}>
            <div className={css.avatarEmpty}>
              <Icon className={css.iconUser} name="user" size={40} />
            </div>
            <button onClick={handleOpen} className={css.avatarText}>
              Upload photo
            </button>
          </div>
        ) : (
          <img src={user.avatar} alt="Avatar Image" className={css.img} />
        )}
        <h3 className={css.infoTitle}>My information</h3>
        <p className={css.info}>{user.name}</p>
        <p className={css.info}>{user.email}</p>
        <p className={`${css.info} ${!user.phone ? css.empty : ""}`}>
          {user.phone || "+380"}
        </p>
      </div>

      {isOpen && <ModalEditUser user={user} onClose={handleClose} />}
    </div>
  );
}
