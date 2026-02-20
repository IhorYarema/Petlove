import css from "./UserBar.module.css";
import { selectUserName } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import { useLocation } from "react-router-dom";

export default function UserBar({ className }) {
  const location = useLocation();

  const isHome = location.pathname === "/home";
  const isYellow = location.pathname !== "/home";

  const userClass = `
    ${css.wrapper}
    ${isYellow ? css.userYellow : ""}
    ${isHome ? css.userHome : ""}
  `;

  const userName = useSelector(selectUserName);

  return (
    <div className={`${userClass} ${className}`}>
      <div className={css.avatar}>
        <Icon className={css.iconUser} name="user" size={20} />
      </div>{" "}
      <span className={css.name}>{userName}</span>
    </div>
  );
}
