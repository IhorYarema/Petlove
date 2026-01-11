import css from "./LoginForm.module.css";
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

export default function LoginForm() {
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
    navigate("/home");
  };

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit(handleFormSubmit, onError)}
    >
      <div className={css.textContainer}>
        <Title className={css.title} />
        <p className={css.formText}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
      </div>

      <input
        className={`${css.input} ${css.firstInput}`}
        type="email"
        placeholder="Email"
        {...register("email")}
      />

      <div className={css.inputWrapper}>
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

      <button type="submit" className={css.btn} disabled={loading}>
        {loading ? "Loading..." : "Registration"}
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
