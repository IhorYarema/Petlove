import css from "./LoginPage.module.css";
import PetBlock from "../../components/PetBlock/PetBlock";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <section className={css.section}>
      <div className={css.sectionContainer}>
        <PetBlock />
        <LoginForm className={css.form} />
      </div>
    </section>
  );
}
