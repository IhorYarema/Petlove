import Select from "react-select";
import css from "./SelectComponent.module.css";
import "./Select.css";
import Icon from "../Icon/Icon";

export default function SelectComponent({
  className,
  value,
  onFilterChange,
  options = [],
  placeholder = "Select",
}) {
  const handleChange = (option) => {
    if (!option || option.value === "all") {
      onFilterChange("all");
    } else {
      onFilterChange(option.value);
    }
  };

  const selectedOption =
    value === null ? null : options.find((opt) => opt.value === value) || null;

  return (
    <div className={`${css.filterBar} ${className}`}>
      <label className={css.label}>Filters</label>
      <div className={`${css.selectWrapper} selectWrapper`}>
        <Select
          unstyled
          value={value === null ? null : selectedOption}
          onChange={handleChange}
          options={options}
          isSearchable={false}
          className={css.reactSelectContainer}
          classNamePrefix="custom"
          placeholder={placeholder}
        />
        <Icon
          className={`${css.iconChevron} iconChevron`}
          name="chevron-down"
          size={18}
        />
      </div>
    </div>
  );
}
