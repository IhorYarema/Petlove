import css from "./ModalEditUser.module.css";
import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/auth/operations";
import { selectUserFullInfo } from "../../redux/auth/selectors";
import { toast } from "react-toastify";
import { editUserSchema } from "../../schemas/editUserSchema";

export default function ModalEditUser({ className, onClose }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUserFullInfo);

  const [isClosing, setIsClosing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(editUserSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      avatar: user?.avatar || "",
      phone: user?.phone || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(updateUser(data)).unwrap();
      toast.success("Profile updated successfully");
      onClose();
    } catch (error) {
      toast.error(error.message || "Failed to update profile");
    }
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const closeByBackdrop = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <div
      className={`${css.backdrop} ${className} ${isClosing ? css.closing : ""}`}
      onClick={closeByBackdrop}
    >
      <div
        className={`${css.modal} ${isClosing ? css.closing : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={css.closeBtn} onClick={closeModal}>
          <Icon className={css.iconClose} name="cross-small" size={24} />
        </button>

        <h3 className={css.title}>Edit information</h3>
        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
          {!user.avatar ? (
            <div className={css.avatarEmpty}>
              <Icon className={css.iconUser} name="user" size={40} />
            </div>
          ) : (
            <img src={user.avatar} alt="Avatar Image" className={css.img} />
          )}

          {/* AVATAR */}
          <label>
            <input {...register("avatar")} />
            {errors.avatar && (
              <p className={css.error}>{errors.avatar.message}</p>
            )}
            <div className={css.uploadContainer}>
              <p>Upload photo</p>{" "}
              <Icon className={css.iconCloud} name="upload-cloud" size={18} />
            </div>
          </label>
          {/* NAME */}
          <label>
            <input {...register("name")} />
            {errors.name && <p className={css.error}>{errors.name.message}</p>}
          </label>

          {/* EMAIL */}
          <label>
            <input {...register("email")} />
            {errors.email && (
              <p className={css.error}>{errors.email.message}</p>
            )}
          </label>

          {/* PHONE */}
          <label>
            <input {...register("phone")} placeholder="+380XXXXXXXXX" />
            {errors.phone && (
              <p className={css.error}>{errors.phone.message}</p>
            )}
          </label>
        </form>
      </div>
    </div>
  );
}
