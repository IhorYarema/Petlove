import css from "./RegistrationPage.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import PetBlock from "../../components/PetBlock/PetBlock";

export default function RegistrationPage() {
  return (
    <section className={css.section}>
      <div className={css.sectionContainer}>
        <PetBlock />
        <RegistrationForm className={css.form} />
      </div>
    </section>
  );
}
