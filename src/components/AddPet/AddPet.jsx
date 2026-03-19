import css from "./AddPet.module.css";
import Icon from "../Icon/Icon";
import { NavLink } from "react-router-dom";

export default function AddPet() {
  return (
    <NavLink to="/add-pet" className={css.addBtn}>
      Add pet <Icon className={css.iconUser} name="plus" size={18} />
    </NavLink>
  );
}
