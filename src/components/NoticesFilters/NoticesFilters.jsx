import css from "./NoticesFilters.module.css";
import SearchField from "../SearchField/SearchField";
import SelectComponent from "../SelectComponent/SelectComponent";
import { fetchCategories } from "../../redux/filters/operations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function NoticesFilters({ className }) {
  const defaultFilter = 0;
  // redux logic
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.filters.items);
  // const loading = useSelector((state) => state.filters.loading);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categoriesOptions = [
    { value: "all", label: "Show all" },
    ...categories.toReversed().map((opt) => ({
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
          options={categoriesOptions}
          defaultFilter={defaultFilter}
          onFilterChange={handleGenderChange}
        />
      </div>
      {/* <SelectComponent options={options} defaultFilter={defaultFilter} onFilterChange={handleCategoryChange}/>
      <SelectComponent options={options} defaultFilter={defaultFilter} onFilterChange={handleCategoryChange}/>
      <div className={css.radioFilters}></div> */}
    </div>
  );
}
