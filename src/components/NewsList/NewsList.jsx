import css from "./NewsList.module.css";

export default function NewsList({ className = "" }) {
  return <div className={`${css.container} ${className}`}></div>;
}
