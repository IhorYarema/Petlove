import SearchField from "../../components/SearchField/SearchField";
import Title from "../../components/Title/Title";
import NewsList from "../../components/NewsList/NewsList";
import css from "./NewsPage.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../../redux/news/operations";

export default function NewsPage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(search.trim());
    }, 400);

    return () => clearTimeout(t);
  }, [search]);

  useEffect(() => {
    dispatch(
      fetchNews({
        page: 1,
        keyword: debouncedSearch || undefined,
      }),
    );
  }, [debouncedSearch, dispatch]);

  return (
    <section className={css.section}>
      <div className={css.sectionContainer}>
        <div className={css.upperCont}>
          <Title className={css.title} />
          <SearchField value={search} onChange={setSearch} />
        </div>
        <NewsList className={css.list} />
      </div>
    </section>
  );
}
