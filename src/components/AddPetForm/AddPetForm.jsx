import css from "./AddPetForm.module.css";
import Icon from "../Icon/Icon";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addPetSchema } from "../../schemas/addPetSchema";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPet } from "../../redux/auth/operations";
import { toast } from "react-toastify";
import { selectUserPets } from "../../redux/auth/selectors";

export default function AddPetForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pet = useSelector(selectUserPets);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addPetSchema),
  });

  const avatarValue = watch("avatar");

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* SEX (radio) */}
      <button
        className={`${css.sexBtn} ${css.male}`}
        type="radio"
        value="male"
        {...register("sex")}
      >
        <Icon className={css.iconCloud} name="male" size={20} />
      </button>

      <button
        className={`${css.sexBtn} ${css.female}`}
        type="radio"
        value="female"
        {...register("sex")}
      >
        <Icon className={css.iconCloud} name="female" size={20} />
      </button>

      <button
        className={`${css.sexBtn} ${css.unknown}`}
        type="radio"
        value="unknown"
        {...register("sex")}
      >
        <Icon className={css.iconCloud} name="male-female" size={20} />
      </button>

      {/* ava */}
      {!pet.avatar ? (
        <div className={css.avatarEmpty}>
          <Icon className={css.iconUser} name="footprint" size={34} />
        </div>
      ) : (
        <img src={avatarValue || pet?.avatar} className={css.img} />
      )}

      {/* IMG URL */}
      <div className={`${css.inputWrapper} ${css.firstInputWrapper}`}>
        <input
          className={css.input}
          {...register("imgUrl")}
          placeholder="Enter URL"
        />
        <div className={css.uploadContainer}>
          <p>Upload photo</p>{" "}
          <Icon className={css.iconCloud} name="upload-cloud" size={18} />
        </div>
      </div>

      {/* TITLE */}
      <input className={css.input} {...register("title")} placeholder="Title" />

      {/* NAME */}
      <input
        className={css.input}
        {...register("name")}
        placeholder="Pet’s Name"
      />

      {/* SPECIES */}
      <input
        className={css.input}
        {...register("species")}
        placeholder="Species"
      />

      {/* BIRTHDAY */}
      <input
        className={css.input}
        {...register("birthday")}
        placeholder="00.00.0000"
      />

      {/* BUTTONS */}
      <button type="submit">Submit</button>
      <button type="button" onClick={handleBack}>
        Back
      </button>
    </form>
  );
}
