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
    formState: { errors, touchedFields, isValid },
  } = useForm({
    resolver: yupResolver(editUserSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      avatar: user?.avatar || "",
      phone: user?.phone || "+380",
    },
  });

  // const onError = (formErrors) => {
  //   const messages = Object.values(formErrors).map((err) => err.message);
  //   messages.forEach((msg) => toast.error(msg));
  // };

  const { loading, error } = useSelector((state) => state.auth);

  const getFieldState = (field) => {
    const error = errors[field];
    const touched = touchedFields[field];

    if (error && touched) return "error";
    if (!error && touched) return "success";
    return "";
  };

  const nameState = getFieldState("name");
  const emailState = getFieldState("email");
  const phoneState = getFieldState("phone");

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
              <Icon className={css.iconUser} name="user" size={44} />
            </div>
          ) : (
            <img src={user.avatar} alt="Avatar Image" className={css.img} />
          )}

          {/* AVATAR */}
          <div className={`${css.inputWrapper} ${css.firstInputWrapper}`}>
            <input className={css.input} {...register("avatar")} />
            {errors.avatar && (
              <p className={css.error}>{errors.avatar.message}</p>
            )}
            <div className={css.uploadContainer}>
              <p>Upload photo</p>{" "}
              <Icon className={css.iconCloud} name="upload-cloud" size={18} />
            </div>
          </div>
          {/* NAME */}
          <div className={`${css.inputWrapper}`}>
            <input
              className={`${css.input} ${
                nameState === "error"
                  ? css.inputError
                  : nameState === "success"
                    ? css.inputSuccess
                    : ""
              }`}
              type="text"
              placeholder="Name"
              {...register("name")}
            />
          </div>

          {/* EMAIL */}
          <div className={css.inputWrapper}>
            <input
              className={`${css.input} ${
                emailState === "error"
                  ? css.inputError
                  : emailState === "success"
                    ? css.inputSuccess
                    : ""
              }`}
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {emailState === "error" && (
              <>
                <p className={css.errorText}>Enter a valid Email</p>
                <Icon className={css.iconError} name="cross-small" size={22} />
              </>
            )}

            {emailState === "success" && (
              <Icon className={css.iconSuccess} name="check" size={22} />
            )}
          </div>

          {/* PHONE */}
          <div className={`${css.inputWrapper}`}>
            <input
              className={`${css.input} ${
                phoneState === "error"
                  ? css.inputError
                  : phoneState === "success"
                    ? css.inputSuccess
                    : ""
              }`}
              type="text"
              placeholder="Phone"
              {...register("phone")}
            />
          </div>

          <button
            type="submit"
            className={css.btn}
            disabled={!isValid || loading}
          >
            {loading ? "Loading..." : "Go to profile"}
          </button>
        </form>
      </div>
    </div>
  );
}
