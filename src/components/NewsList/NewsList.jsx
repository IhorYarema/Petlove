import css from "./NewsList.module.css";
import NewsItem from "../NewsItem/NewsItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNews } from "../../redux/news/operations";

export default function NewsList({ className = "" }) {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.items) || [];
  const loading = useSelector((state) => state.news.loading);

  useEffect(() => {
    dispatch(fetchNews({ page: 1, perPage: 10 }));
  }, [dispatch]);

  if (loading) return <p>Loading news...</p>;
  if (!news.length) return <p>No news available</p>;

  return (
    <div className={`${css.container} ${className}`}>
      <ul className={css.list}>
        {news.map((item) => (
          <li key={item._id} className={css.item}>
            <NewsItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
