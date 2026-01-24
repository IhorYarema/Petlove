import css from "./SortRadios.module.css";
import Icon from "../Icon/Icon";

export default function SortRadios({ sort, setSort }) {
  const popularityOptions = [
    { value: "popular", label: "Popular" },
    { value: "unpopular", label: "Unpopular" },
  ];

  const priceOptions = [
    { value: "cheap", label: "Cheap" },
    { value: "expensive", label: "Expensive" },
  ];

  const handleToggle = (group, value) => {
    setSort((prev) => ({
      ...prev,
      [group]: prev[group] === value ? null : value,
    }));
  };

  return (
    <div className={css.sortCont}>
      {/* POPULARITY */}
      {popularityOptions.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={`${css.sortBtn} ${
            sort.popularity === opt.value ? css.active : ""
          }`}
          onClick={() => handleToggle("popularity", opt.value)}
        >
          {opt.label}
          <Icon className={css.iconClose} name="cross-small" size={18} />
        </button>
      ))}

      {/* PRICE */}
      {priceOptions.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={`${css.sortBtn} ${
            sort.price === opt.value ? css.active : ""
          }`}
          onClick={() => handleToggle("price", opt.value)}
        >
          {opt.label}
          <Icon className={css.iconClose} name="cross-small" size={18} />
        </button>
      ))}
    </div>
  );
}
