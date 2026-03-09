import css from "./UserCard.module.css";
import { useSelector } from "react-redux";
import EditUserBtn from "../EditUserBtn/EditUserBtn";
import UserBlock from "../UserBlock/UserBlock";
import { selectUserFullInfo } from "../../redux/auth/selectors";
import PetsBlock from "../PetsBlock/PetsBlock";

export default function UserCard() {
  const user = useSelector(selectUserFullInfo);

  return (
    <div className={css.userCard}>
      <EditUserBtn user={user} />
      <UserBlock user={user} />
      <PetsBlock />
    </div>
  );
}
