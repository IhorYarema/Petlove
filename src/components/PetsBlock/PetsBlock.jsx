import AddPet from "../AddPet/AddPet";
import PetsList from "../PetsList/PetsList";
import css from "./PetsBlock.module.css";

export default function PetsBlock() {
  return (
    <div className={css.petBlock}>
      <div className={css.upperCont}>
        <h3 className={css.title}>My pets</h3>
        <AddPet />
      </div>
      <PetsList />
    </div>
  );
}
