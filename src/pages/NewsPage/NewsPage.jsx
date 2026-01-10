import SearchField from "../../components/SearchField/SearchField";
import Title from "../../components/Title/Title";
import NewsList from "../../components/NewsList/NewsList";
import css from "./NewsPage.module.css";

export default function NewsPage() {
  return (
    <section className={css.section}>
      <div className={css.sectionContainer}>
        <div className={css.upperCont}>
          <Title className={css.title} />
          <SearchField />
        </div>
        <NewsList className={css.list} />
      </div>
    </section>
  );
}
