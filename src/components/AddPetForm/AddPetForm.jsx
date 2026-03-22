import css from "./AddPetForm.module.css";
import Icon from "../Icon/Icon";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addPetSchema } from "../../schemas/addPetSchema";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPet } from "../../redux/auth/operations";
import { toast } from "react-toastify";
import { selectUserPets } from "../../redux/auth/selectors";
import Select from "react-select";
import "./Select.css";

export default function AddPetForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pet = useSelector(selectUserPets);

  const {
    register,
    watch,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addPetSchema),
    defaultValues: {
      species: "",
    },
  });

  const avatarValue = watch("avatar");
  const selectedSex = watch("sex");
  // const selectedSpecies = watch("species");

  const onSubmit = async (data) => {
    try {
      await dispatch(addPet(data)).unwrap();

      navigate("/profile");
    } catch (e) {
      toast.error("Failed to add pet");
    }
  };

  const handleBack = () => {
    navigate("/profile");
  };

  //SELECT LOGIC
  const types = useSelector((state) => state.filters.types);

  const typesOptions = [
    ...types.map((opt) => ({
      value: opt,
      label: opt,
    })),
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <h3 className={css.title}>
        Add my pet /<span>Personal details</span>
      </h3>
      {/* SEX (radio) */}
      <div className={css.radioBtnCont}>
        <button
          type="button"
          className={`${css.sexBtn} ${css.female} ${
            selectedSex === "female" ? css.active : ""
          }`}
          onClick={() => setValue("sex", "female")}
        >
          <Icon className={css.iconSex} name="female" size={20} />
        </button>

        <button
          type="button"
          className={`${css.sexBtn} ${css.male} ${
            selectedSex === "male" ? css.active : ""
          }`}
          onClick={() => setValue("sex", "male")}
        >
          <Icon className={css.iconSex} name="male" size={20} />
        </button>

        <button
          type="button"
          className={`${css.sexBtn} ${css.unknown} ${
            selectedSex === "unknown" ? css.active : ""
          }`}
          onClick={() => setValue("sex", "unknown")}
        >
          <Icon className={css.iconSex} name="male-female" size={20} />
        </button>
      </div>
      {/* регистрация поля */}
      <input type="hidden" {...register("sex")} />

      {/* ava */}
      {!pet.avatar ? (
        <div className={css.avatarEmpty}>
          <Icon className={css.iconUser} name="footprint" size={34} />
        </div>
      ) : (
        <img src={avatarValue || pet?.avatar} className={css.img} />
      )}

      <div className={css.inputsContainer}>
        {/* IMG URL */}
        <div className={`${css.inputWrapper} ${css.firstInputWrapper}`}>
          <input
            className={css.input}
            {...register("imgURL")}
            placeholder="Enter URL"
          />
          <div className={css.uploadContainer}>
            <p>Upload photo</p>{" "}
            <Icon className={css.iconCloud} name="upload-cloud" size={18} />
          </div>
        </div>

        {/* TITLE */}
        <input
          className={css.input}
          {...register("title")}
          placeholder="Title"
        />

        {/* NAME */}
        <input
          className={css.input}
          {...register("name")}
          placeholder="Pet’s Name"
        />

        <div className={css.lastInputCont}>
          {/* SPECIES */}
          {/* <input
            className={css.input}
            {...register("species")}
            placeholder="Species"
          /> */}
          {/* <SelectComponent
            value={selectedSpecies}
            options={typesOptions}
            defaultFilter={defaultFilter}
            placeholder="Type of pet"
            onFilterChange={(value) => setValue("species", value)}
            className={css.input}
          /> */}
          <Controller
            name="species"
            control={control}
            render={({ field }) => {
              const selectedOption =
                typesOptions.find((opt) => opt.value === field.value) || null;

              return (
                <div className={`${css.selectWrapper} selectWrapper`}>
                  <Select
                    unstyled
                    value={selectedOption}
                    onChange={(option) => field.onChange(option?.value)}
                    options={typesOptions}
                    isSearchable={false}
                    className={css.reactSelectContainer}
                    classNamePrefix="custom"
                    placeholder="Type of pet"
                  />

                  {/* <Icon
                    className={`${css.iconChevron} iconChevron`}
                    name="chevron-down"
                    size={18}
                  /> */}
                </div>
              );
            }}
          />

          {/* BIRTHDAY */}
          <input
            className={css.input}
            // type="date"
            {...register("birthday")}
            placeholder="00.00.0000"
          />
        </div>
      </div>

      {/* BUTTONS */}
      <div className={css.btnCont}>
        <button
          type="button"
          onClick={handleBack}
          className={`${css.btn} ${css.back}`}
        >
          Back
        </button>

        <button type="submit" className={`${css.btn} ${css.submit}`}>
          Submit
        </button>
      </div>
    </form>
  );
}
