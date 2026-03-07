import css from "./UserCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import EditUserBtn from "../EditUserBtn/EditUserBtn";
import UserBlock from "../UserBlock/UserBlock";
import { selectUserFullInfo } from "../../redux/auth/selectors";

export default function UserCard() {
  //   const dispatch = useDispatch();
  const user = useSelector(selectUserFullInfo);

  return (
    <div className={css.userCard}>
      <EditUserBtn user={user} />
      <UserBlock user={user} />
    </div>
  );
}
