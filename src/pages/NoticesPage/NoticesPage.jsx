import css from "./NoticesPage.module.css";
import Title from "../../components/Title/Title";
import NoticesFilters from "../../components/NoticesFilters/NoticesFilters";
import NoticesList from "../../components/NoticesList/NoticesList";

export default function NoticesPage() {
  return (
    <section className={css.section}>
      <div className={css.sectionContainer}>
        <Title className={css.title} />
        <NoticesFilters />
        <NoticesList />
      </div>
    </section>
  );
}
