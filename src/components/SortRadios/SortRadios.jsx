import css from "./SortRadios.module.css";
import Icon from "../Icon/Icon";

export default function SortRadios({ value, onChange }) {
  const sortOptions = [
    { value: "popular", label: "Popular" },
    { value: "unpopular", label: "Unpopular" },
    { value: "cheap", label: "Cheap" },
    { value: "expensive", label: "Expensive" },
  ];

  return (
    <div className={css.sortGroup}>
      {sortOptions.map((opt) => (
        <label key={opt.value} className={css.sortOption}>
          <input
            type="radio"
            name="sort"
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className={css.radioInput}
          />
          <span className={css.sortSpan}>
            {opt.label}
            <Icon className={css.iconClose} name="cross-small" size={18} />
          </span>
        </label>
      ))}
    </div>
  );
}
