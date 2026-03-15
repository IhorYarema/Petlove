import css from "./RegistrationForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/auth/operations";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import Icon from "../Icon/Icon";
import schema from "../../schemas/signUpSchema";
import Title from "../Title/Title";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onError = (formErrors) => {
    const messages = Object.values(formErrors).map((err) => err.message);
    messages.forEach((msg) => toast.error(msg));
  };

  const { loading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const getFieldState = (field) => {
    const error = errors[field];
    const touched = touchedFields[field];

    if (error && touched) return "error";
    if (!error && touched) return "success";
    return "";
  };

  const nameState = getFieldState("name");
  const emailState = getFieldState("email");
  const passwordState = getFieldState("password");
  const confirmPasswordState = getFieldState("confirmPassword");

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((p) => !p);

  const handleFormSubmit = async (data) => {
    try {
      await dispatch(registerUser(data)).unwrap();

      toast.success("Welcome!");
      navigate("/profile");
    } catch (err) {
      toast.error(err ?? "Invalid email or password");
    }
  };

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit(handleFormSubmit, onError)}
    >
      <div className={css.textContainer}>
        <Title className={css.title} />
        <p className={css.formText}>
          Thank you for your interest in our platform.
        </p>
      </div>

      <div className={`${css.inputWrapper} ${css.firstInputWrapper}`}>
        <input
          className={`${css.input} ${css.firstInput} ${
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

      <div className={css.inputWrapper}>
        <input
          className={`${css.input} ${
            passwordState === "error"
              ? css.inputError
              : passwordState === "success"
                ? css.inputSuccess
                : ""
          }`}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          {...register("password")}
        />
        <button className={css.btnIcon} type="button" onClick={togglePassword}>
          <Icon
            className={css.iconEye}
            size={20}
            name={showPassword ? "eye" : "eye-off"}
          />
        </button>
      </div>

      <div className={`${css.inputWrapper} ${css.lastInputWrapper}`}>
        <input
          className={`${css.input} ${css.lastInput} ${
            confirmPasswordState === "error"
              ? css.inputError
              : confirmPasswordState === "success"
                ? css.inputSuccess
                : ""
          }`}
          type={showPassword ? "text" : "password"}
          placeholder="Confirm password"
          {...register("confirmPassword")}
        />
        <button className={css.btnIcon} type="button" onClick={togglePassword}>
          <Icon
            className={css.iconEye}
            size={18}
            name={showPassword ? "eye" : "eye-off"}
          />
        </button>
      </div>

      <button type="submit" className={css.btn} disabled={!isValid || loading}>
        {loading ? "Loading..." : "Registration"}
      </button>

      <p className={css.lowerText}>
        Already have an account?{" "}
        <span>
          <NavLink className={css.link} to="/login">
            Login
          </NavLink>
        </span>
      </p>
    </form>
  );
}
