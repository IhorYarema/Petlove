import css from "./NoticesList.module.css";
import NoticesItem from "../NoticesItem/NoticesItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNotices } from "../../redux/notices/operations";

export default function NoticesList({ className = "" }) {
  const dispatch = useDispatch();
  const notices = useSelector((state) => state.notices.items) || [];
  const loading = useSelector((state) => state.notices.loading);

  useEffect(() => {
    dispatch(fetchNotices({ page: 1, perPage: 10 }));
  }, [dispatch]);

  if (loading) return <p>Loading Notices...</p>;
  if (!notices.length) return <p>No Notices available</p>;

  return (
    <div className={`${css.container} ${className}`}>
      <ul className={css.list}>
        {notices.map((item) => (
          <li key={item._id} className={css.item}>
            <NoticesItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
