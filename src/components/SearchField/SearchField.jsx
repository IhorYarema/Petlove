import css from "./SearchField.module.css";
import Icon from "../Icon/Icon";
import { useEffect, useState } from "react";

export default function SearchField({
  className = "",
  value = "",
  onChange,
  debounce = 400,
}) {
  const [localValue, setLocalValue] = useState(value);

  // синхронизация если значение пришло снаружи
  useEffect(() => {
    const trimmed = localValue.trim();

    const timer = setTimeout(() => {
      if (trimmed !== value) {
        onChange?.(trimmed);
      }
    }, debounce);

    return () => clearTimeout(timer);
  }, [localValue, debounce, onChange, value]);

  return (
    <div className={`${css.inputContainer} ${className}`}>
      <input
        className={css.input}
        type="text"
        placeholder="Search"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
      />
      <Icon name="search" size={18} className={css.iconSearch} />
      {localValue && (
        <button
          className={css.closeBtn}
          onClick={() => setLocalValue("")}
          type="button"
        >
          <Icon className={css.iconClose} name="cross-small" size={18} />
        </button>
      )}
    </div>
  );
}
