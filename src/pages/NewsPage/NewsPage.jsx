import SearchField from "../../components/SearchField/SearchField";
import Title from "../../components/Title/Title";
import css from "./NewsPage.module.css";

export default function NewsPage() {
  return (
    <section className={css.section}>
      <div className={css.sectionContainer}>
        <Title className={css.title} />
        <SearchField />
      </div>
    </section>
  );
}
