import css from "./AddPetForm.module.css";
import Icon from "../Icon/Icon";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addPetSchema } from "../../schemas/addPetSchema";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPet } from "../../redux/auth/operations";
import { toast } from "react-toastify";

export default function AddPetForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addPetSchema),
  });

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
      {/* IMG URL */}
      <input {...register("imgUrl")} placeholder="Image URL" />
      <p>{errors.imgUrl?.message}</p>

      {/* TITLE */}
      <input className={css.input} {...register("title")} placeholder="Title" />
      <p>{errors.title?.message}</p>

      {/* NAME */}
      <input {...register("name")} placeholder="Name" />
      <p>{errors.name?.message}</p>

      {/* SPECIES */}
      <input {...register("species")} placeholder="Species" />
      <p>{errors.species?.message}</p>

      {/* BIRTHDAY */}
      <input {...register("birthday")} placeholder="YYYY-MM-DD" />
      <p>{errors.birthday?.message}</p>

      {/* SEX (radio) */}
      <label>
        <input type="radio" value="male" {...register("sex")} />
        Male
      </label>

      <label>
        <input type="radio" value="female" {...register("sex")} />
        Female
      </label>

      <p>{errors.sex?.message}</p>

      {/* BUTTONS */}
      <button type="submit">Submit</button>
      <button type="button" onClick={handleBack}>
        Back
      </button>
    </form>
  );
}
