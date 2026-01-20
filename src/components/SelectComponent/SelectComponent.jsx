import Select from "react-select";
import { useState } from "react";
import css from "./SelectComponent.module.css";
import "./Select.css";

export default function SelectComponent({
  onFilterChange = () => {},
  defaultFilter = 0,
  options = [],
}) {
  const [selectedFilter, setSelectedFilter] = useState(
    options[defaultFilter] || null,
  );

  const handleChange = (option) => {
    setSelectedFilter(option);
    onFilterChange(option.value);
  };

  return (
    <div className={css.filterBar}>
      <label className={css.label}>Filters</label>
      <div className={css.selectWrapper}>
        <Select
          unstyled
          value={selectedFilter}
          onChange={handleChange}
          options={options}
          isSearchable={false}
          className={css.reactSelectContainer}
          classNamePrefix="custom"
        />
      </div>
    </div>
  );
}
