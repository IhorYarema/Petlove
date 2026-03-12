import css from "./UserCard.module.css";
import { useSelector } from "react-redux";
import EditUserBtn from "../EditUserBtn/EditUserBtn";
import UserBlock from "../UserBlock/UserBlock";
import { selectUserFullInfo } from "../../redux/auth/selectors";
import PetsBlock from "../PetsBlock/PetsBlock";
import LogoutBtn from "../LogoutBtn/LogoutBtn";

export default function UserCard() {
  const user = useSelector(selectUserFullInfo);

  return (
    <div className={css.userCard}>
      <EditUserBtn user={user} className={css.editBtn} />
      <UserBlock user={user} />
      <PetsBlock />
      <LogoutBtn className={css.logOutBtn} />
    </div>
  );
}
