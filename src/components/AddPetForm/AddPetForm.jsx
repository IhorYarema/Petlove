import css from "./AddPetForm.module.css";
import Icon from "../Icon/Icon";
import { NavLink } from "react-router-dom";

export default function AddPetForm() {
  return (
    <NavLink to="/add-pet" className={css.addBtn}>
      <Icon className={css.iconUser} name="plus" size={18} />
    </NavLink>
  );
}
