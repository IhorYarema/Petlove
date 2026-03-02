import SearchField from "../../components/SearchField/SearchField";
import Title from "../../components/Title/Title";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import css from "./NewsPage.module.css";
import { useState, useEffect } from "react";
import { fetchNews } from "../../redux/news/operations";
import { useDispatch, useSelector } from "react-redux";

export default function NewsPage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const dispatch = useDispatch();

  const page = useSelector((state) => state.news.page);
  const totalPages = useSelector((state) => state.news.totalPages);
  const perPage = useSelector((state) => state.news.perPage);

  const handlePageChange = (newPage, limit) => {
    dispatch(fetchNews({ page: newPage, limit }));
  };

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
        <Pagination
          page={page}
          totalPages={totalPages}
          perPage={perPage}
          onPageChange={handlePageChange}
          className={css.pagination}
        />
      </div>
    </section>
  );
}
