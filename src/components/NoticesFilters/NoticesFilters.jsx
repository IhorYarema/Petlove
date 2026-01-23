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

export default function NoticesFilters({ className }) {
  // const [sort, setSort] = useState("popular");
  const [filters, setFilters] = useState({
    category: null,
    sex: null,
    type: null,
    location: null,
    popularity: null,
    price: null,
    keyword: "",
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
        }),
      );
    }, 300);

    return () => clearTimeout(t);
  }, [filters, dispatch]);

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
    setFilters((prev) => ({ ...prev, sex: value === "all" ? null : value }));
  };

  const handleTypeChange = (value) => {
    setFilters((prev) => ({ ...prev, type: value === "all" ? null : value }));
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
      <LocationSelect
        onSelectCity={(city) =>
          setFilters((prev) => ({ ...prev, location: city }))
        }
      />
      <div className={css.radioFilters}>
        <SortRadios
          sort={filters}
          setSort={(updater) =>
            setFilters((prev) => ({ ...prev, ...updater(prev) }))
          }
        />
      </div>
    </div>
  );
}
