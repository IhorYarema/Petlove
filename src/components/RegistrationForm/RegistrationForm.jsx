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

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onError = (formErrors) => {
    const messages = Object.values(formErrors).map((err) => err.message);
    messages.forEach((msg) => toast.error(msg));
  };

  const { loading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((p) => !p);

  const handleFormSubmit = async (data) => {
    const result = await dispatch(registerUser(data));

    if (result.error) {
      toast.error(result.payload || "Login failed");
      return;
    }

    toast.success("Login successful!");
    navigate("/dictionary");
  };

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit(handleFormSubmit, onError)}
    >
      <div className={css.textContainer}>
        <h2 className={css.title}>Registration</h2>
        <p className={css.formText}>
          Thank you for your interest in our platform.
        </p>
      </div>

      <input
        className={`${css.input} ${css.firstInput}`}
        type="text"
        placeholder="Name"
        {...register("name")}
      />

      <input
        className={css.input}
        type="email"
        placeholder="Email"
        {...register("email")}
      />

      <div className={css.inputWrapper}>
        <input
          className={css.input}
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

      <div className={css.inputWrapper}>
        <input
          className={`${css.input} ${css.lastInput}`}
          type={showPassword ? "text" : "password"}
          placeholder="Confirm password"
          {...register("password")}
        />
        <button className={css.btnIcon} type="button" onClick={togglePassword}>
          <Icon
            className={css.iconEye}
            size={18}
            name={showPassword ? "eye" : "eye-off"}
          />
        </button>
      </div>

      <button type="submit" className={css.btn} disabled={loading}>
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
