import css from "./RegistrationPage.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function RegistrationPage() {
  return (
    <section className={css.section}>
      <div className={css.sectionContainer}>
        <RegistrationForm className={css.form} />
      </div>
    </section>
  );
}
