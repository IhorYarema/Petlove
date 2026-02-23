import css from "./SortRadios.module.css";
import Icon from "../Icon/Icon";

export default function SortRadios({ sort, setSort }) {
  const options = [
    { value: "-popularity", label: "Popular" },
    { value: "popularity", label: "Unpopular" },
    { value: "price", label: "Cheap" },
    { value: "-price", label: "Expensive" },
  ];

  return (
    <div className={css.sortCont}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={`${css.sortBtn} ${sort === opt.value ? css.active : ""}`}
          onClick={() =>
            setSort((prev) => (prev === opt.value ? null : opt.value))
          }
        >
          {opt.label}
          {sort === opt.value && (
            <Icon className={css.iconClose} name="cross-small" size={18} />
          )}
        </button>
      ))}
    </div>
  );
}
