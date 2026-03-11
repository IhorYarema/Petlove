import css from "./PetsList.module.css";
import PetsItem from "../PetsItem/PetsItem";
import { useSelector } from "react-redux";
import { selectUserPets } from "../../redux/auth/selectors";

export default function PetsList({ className = "" }) {
  const pets = useSelector(selectUserPets);

  if (!pets.length) return null;

  return (
    <div className={`${css.container} ${className}`}>
      <ul className={css.list}>
        {pets.map((item) => (
          <li key={item._id} className={css.item}>
            <PetsItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
