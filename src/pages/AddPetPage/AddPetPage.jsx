import PetBlock from "../../components/PetBlock/PetBlock";
import AddPetForm from "../../components/AddPetForm/AddPetForm";
import css from "./AddPetPage.module.css";

export default function AddPetPage() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <PetBlock />
        <AddPetForm />
      </div>
    </section>
  );
}
