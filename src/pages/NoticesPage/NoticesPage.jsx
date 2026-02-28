import css from "./NoticesPage.module.css";
import Title from "../../components/Title/Title";
import NoticesFilters from "../../components/NoticesFilters/NoticesFilters";
import NoticesList from "../../components/NoticesList/NoticesList";
import Pagination from "../../components/Pagination/Pagination";
import { fetchNotices } from "../../redux/notices/operations";
import { useDispatch, useSelector } from "react-redux";

export default function NoticesPage() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.notices.page);
  const totalPages = useSelector((state) => state.notices.totalPages);
  const perPage = useSelector((state) => state.notices.perPage);

  const handlePageChange = (newPage, limit) => {
    dispatch(fetchNotices({ page: newPage, limit }));
  };

  return (
    <section className={css.section}>
      <div className={css.sectionContainer}>
        <Title className={css.title} />
        <NoticesFilters />
        <NoticesList />
        <Pagination
          page={page}
          totalPages={totalPages}
          perPage={perPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
