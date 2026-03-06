import css from "./LoginForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/auth/operations";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import Icon from "../Icon/Icon";
import schema from "../../schemas/signInSchema";
import Title from "../Title/Title";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const onError = (formErrors) => {
  //   const messages = Object.values(formErrors).map((err) => err.message);
  //   messages.forEach((msg) => toast.error(msg));
  // };

  const { loading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const emailError = errors.email;
  const emailTouched = touchedFields.email;

  const emailState =
    emailError && emailTouched
      ? "error"
      : !emailError && emailTouched
        ? "success"
        : "";

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((p) => !p);

  const handleFormSubmit = async (data) => {
    try {
      await dispatch(loginUser(data)).unwrap();

      toast.success("Welcome back!");
      navigate("/profile");
    } catch (err) {
      toast.error(err ?? "Invalid email or password");
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(handleFormSubmit)}>
      <div className={css.textContainer}>
        <Title className={css.title} />
        <p className={css.formText}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
      </div>

      <div className={`${css.inputWrapper} ${css.firstInputWrapper}`}>
        <input
          className={`${css.input} ${css.firstInput} ${
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

      <div className={`${css.inputWrapper} ${css.lastInputWrapper}`}>
        <input
          className={`${css.input} ${css.lastInput}`}
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

      <button type="submit" className={css.btn} disabled={!isValid || loading}>
        {loading ? "Loading..." : "Log in"}
      </button>

      <p className={css.lowerText}>
        Don’t have an account?{" "}
        <span>
          <NavLink className={css.link} to="/register">
            Register
          </NavLink>
        </span>
      </p>
    </form>
  );
}
