import css from "./UserBlock.module.css";
import { useSelector } from "react-redux";
import { selectUserFullInfo } from "../../redux/auth/selectors";

export default function UserCard(user) {
  //   const user = useSelector(selectUserFullInfo);

  return (
    <div className={css.userBlock}>
      <p>{user.name}</p>
    </div>
  );
}
