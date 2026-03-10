import PetsList from "../PetsList/PetsList";
import css from "./PetsBlock.module.css";

export default function PetsBlock() {
  return (
    <div className={css.petBlock}>
      <PetsList />
    </div>
  );
}
