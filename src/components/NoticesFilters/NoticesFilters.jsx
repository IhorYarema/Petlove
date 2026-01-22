import css from "./NoticesFilters.module.css";
import SearchField from "../SearchField/SearchField";
import SelectComponent from "../SelectComponent/SelectComponent";
import {
  fetchCategories,
  fetchSex,
  fetchType,
} from "../../redux/filters/operations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LocationSelect from "../LocationSelect/LocationSelect";

export default function NoticesFilters({ className }) {
  const defaultFilter = 0;
  // redux logic
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.filters.categories);
  const sex = useSelector((state) => state.filters.sex);
  const types = useSelector((state) => state.filters.types);

  // const loading = useSelector((state) => state.filters.loading);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSex());
    dispatch(fetchType());
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
      <LocationSelect />
      <div className={css.radioFilters}></div>
    </div>
  );
}
