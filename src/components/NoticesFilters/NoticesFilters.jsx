import css from "./NoticesFilters.module.css";

export default function NoticesFilters({ className }) {
  return <div className={`${css.filters} ${className}`}></div>;
}
