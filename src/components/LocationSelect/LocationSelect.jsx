import "./LocationFilter.css";
import css from "./LocationSelect.module.css";
import { fetchCities } from "../../redux/filters/operations";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import Icon from "../Icon/Icon";

export default function LocationSelect({ className, onSelectCity }) {
  const [selectedCity, setSelectedCity] = useState(null);
  const [cityKeyword, setCityKeyword] = useState("");

  const dispatch = useDispatch();

  const cities = useSelector((state) => state.filters.cities);

  useEffect(() => {
    if (cityKeyword.length < 3) return;

    const timeout = setTimeout(() => {
      dispatch(fetchCities(cityKeyword));
    }, 400);

    return () => clearTimeout(timeout);
  }, [cityKeyword, dispatch]);

  const citiesOptions = [
    ...cities.map((opt) => ({
      value: `${opt.stateEn}, ${opt.cityEn}`,
      label: `${opt.stateEn}, ${opt.cityEn}`,
    })),
  ];

  const handleCityChange = (value) => {
    onSelectCity(value);
  };

  return (
    <div className={`${css.inputContainer} ${className}`}>
      <Select
        unstyled
        value={selectedCity}
        onChange={(option) => {
          setSelectedCity(option);
          handleCityChange(option.value);
        }}
        onInputChange={(value, { action }) => {
          if (action === "input-change") {
            setCityKeyword(value);
          }
        }}
        options={citiesOptions}
        isSearchable
        className={css.input}
        classNamePrefix="custom"
        placeholder="Location"
        formatOptionLabel={(option, { inputValue }) => {
          if (!inputValue) return option.label;

          const input = inputValue.toLowerCase();
          const words = option.label.split(" ");

          return (
            <span>
              {words.map((word, i) => {
                if (word.toLowerCase().startsWith(input)) {
                  return (
                    <span key={i} style={{ textTransform: "capitalize" }}>
                      <span style={{ color: "rgba(38, 38, 38, 1)" }}>
                        {word.slice(0, input.length)}
                      </span>
                      <span>{word.slice(input.length)}</span>
                    </span>
                  );
                }
                return <span key={i}>{word} </span>;
              })}
            </span>
          );
        }}
      />
      <Icon name="search" size={18} className={css.iconSearch} />
      <button
        className={css.closeBtn}
        onClick={() => {
          setSelectedCity(null);
          setCityKeyword("");
        }}
        type="button"
      >
        <Icon className={css.iconClose} name="cross-small" size={18} />
      </button>
    </div>
  );
}
