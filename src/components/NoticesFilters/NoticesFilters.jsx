import css from "./NoticesFilters.module.css";
import Select from "react-select/base";
import Icon from "../Icon/Icon";
import SearchField from "../SearchField/SearchField";
import SelectComponent from "../SelectComponent/SelectComponent";
import {
  fetchCategories,
  fetchCities,
  fetchSex,
  fetchType,
} from "../../redux/filters/operations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function NoticesFilters({ className }) {
  const defaultFilter = 0;
  // redux logic
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.filters.categories);
  const sex = useSelector((state) => state.filters.sex);
  const types = useSelector((state) => state.filters.types);
  const cities = useSelector((state) => state.filters.cities);

  // const loading = useSelector((state) => state.filters.loading);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSex());
    dispatch(fetchType());
    dispatch(fetchCities());
  }, [dispatch]);

  // OPTIONS
  const categoriesOptions = [
    { value: "all", label: "Show all" },
    ...categories.toReversed().map((opt) => ({
      value: opt,
      label: opt,
    })),
  ];

  const sexOptions = [
    { value: "all", label: "Show all" },
    ...sex.toReversed().map((opt) => ({
      value: opt,
      label: opt,
    })),
  ];

  const typesOptions = [
    { value: "all", label: "Show all" },
    ...types.map((opt) => ({
      value: opt,
      label: opt,
    })),
  ];

  const citiesOptions = [
    { value: "all", label: "Show all" },
    ...cities.map((opt) => ({
      value: opt,
      label: opt,
    })),
  ];

  const handleCategoryChange = (value) => {
    console.log("Selected category:", value);
    // тут позже будет dispatch(fetchNotices({ category: value }))
  };

  const handleGenderChange = (value) => {
    console.log("Selected Gender:", value);
    // тут позже будет dispatch(fetchNotices({ category: value }))
  };

  const handleTypeChange = (value) => {
    console.log("Selected Type:", value);
    // тут позже будет dispatch(fetchNotices({ category: value }))
  };

  const handleCityChange = (value) => {
    console.log("Selected Type:", value);
    // тут позже будет dispatch(fetchNotices({ category: value }))
  };

  return (
    <div className={`${css.filters} ${className}`}>
      <SearchField />
      <div className={css.selectCont}>
        <SelectComponent
          options={categoriesOptions}
          defaultFilter={defaultFilter}
          onFilterChange={handleCategoryChange}
        />
        <SelectComponent
          options={sexOptions}
          defaultFilter={defaultFilter}
          onFilterChange={handleGenderChange}
        />
      </div>
      <SelectComponent
        options={typesOptions}
        defaultFilter={defaultFilter}
        onFilterChange={handleTypeChange}
      />
      {/* <SelectComponent
        options={citiesOptions}
        defaultFilter={defaultFilter}
        onFilterChange={handleCityChange}
      /> */}
      <div className={`${css.inputContainer} ${className}`}>
        <Select
          unstyled
          value={defaultFilter}
          onChange={handleCityChange}
          options={citiesOptions}
          isSearchable={false}
          className={css.input}
          classNamePrefix="custom"
        />
        <Icon name="search" size={18} className={css.iconSearch} />
        <button className={css.closeBtn}>
          <Icon className={css.iconClose} name="cross-small" size={18} />
        </button>
      </div>
      <div className={css.radioFilters}></div>
    </div>
  );
}
