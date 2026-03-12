import Icon from "../Icon/Icon";
import css from "./UserBlock.module.css";
// import { useSelector } from "react-redux";
// import { selectUserFullInfo } from "../../redux/auth/selectors";

export default function UserCard({ user }) {
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
            <p className={css.avatarText}>Upload photo</p>
          </div>
        ) : (
          <img src={user.avatar} alt="Avatar Image" className={css.img} />
        )}
        <h3 className={css.infoTitle}>My information</h3>
        <p className={css.info}>{user.name}</p>
        <p className={css.info}>{user.email}</p>
        <p className={css.info}> {user.phone ? user.phone : "+380 "}</p>
      </div>
    </div>
  );
}
