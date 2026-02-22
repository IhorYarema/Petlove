import css from "./NoticesFilters.module.css";
import SearchField from "../SearchField/SearchField";
import SelectComponent from "../SelectComponent/SelectComponent";
import {
  fetchCategories,
  fetchSex,
  fetchType,
} from "../../redux/filters/operations";
import { fetchNotices } from "../../redux/notices/operations";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LocationSelect from "../LocationSelect/LocationSelect";
import SortRadios from "../SortRadios/SortRadios";
import { useCallback } from "react";

export default function NoticesFilters({ className }) {
  const [filters, setFilters] = useState({
    category: null,
    sex: null,
    type: null,
    location: null,
    keyword: "",
  });

  const [sort, setSort] = useState({
    popularity: null,
    price: null,
  });

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

  useEffect(() => {
    const t = setTimeout(() => {
      dispatch(
        fetchNotices({
          page: 1,
          perPage: 10,
          ...filters,
          ...sort,
        }),
      );
    }, 300);

    return () => clearTimeout(t);
  }, [filters, sort, dispatch]);

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
    setFilters((prev) => ({
      ...prev,
      category: value === "all" ? null : value,
    }));
  };

  const handleGenderChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      sex: value === "all" ? null : value,
    }));
  };
  const handleTypeChange = (value) => {
    setFilters((prev) => ({ ...prev, type: value === "all" ? null : value }));
  };

  const handleKeywordChange = useCallback((value) => {
    setFilters((prev) => ({ ...prev, keyword: value || null }));
  }, []);

  return (
    <div className={`${css.filters} ${className}`}>
      <div className={css.filtersInput}>
        <SearchField
          value={filters.keyword}
          onChange={handleKeywordChange}
          className={css.selectKeyWord}
        />

        <div className={css.selectCont}>
          <SelectComponent
            value={filters.category}
            options={categoriesOptions}
            placeholder="Category"
            onFilterChange={handleCategoryChange}
            className={css.selectCategory}
          />
          <SelectComponent
            value={filters.sex}
            options={sexOptions}
            defaultFilter={defaultFilter}
            placeholder="By gender"
            onFilterChange={handleGenderChange}
            className={css.selectSex}
          />
        </div>
        <SelectComponent
          value={filters.type}
          options={typesOptions}
          defaultFilter={defaultFilter}
          placeholder="By type"
          onFilterChange={handleTypeChange}
          className={css.selectType}
        />
        <LocationSelect
          onSelectCity={(cityId) =>
            setFilters((prev) => ({ ...prev, location: cityId }))
          }
          className={css.selectLocation}
        />
      </div>
      <div className={css.radioFilters}>
        <SortRadios sort={sort} setSort={setSort} />
      </div>
    </div>
  );
}
