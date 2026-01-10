import css from "./SearchField.module.css";
import Icon from "../Icon/Icon";

export default function SearchField({ className = "" }) {
  return (
    <div className={css.inputContainer}>
      <input
        className={`${css.input} ${className}`}
        type="text"
        placeholder="Search"
      />
      <Icon name="search" size={18} className={css.iconSearch} />
      <button className={css.closeBtn}>
        <Icon className={css.iconClose} name="cross-small" size={18} />
      </button>
    </div>
  );
}
