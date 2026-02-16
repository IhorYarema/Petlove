import * as yup from "yup";

export const signUpSchema = yup.object({
  name: yup.string().trim().required("Name is required"),

  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Invalid email format"),

  password: yup
    .string()
    .required("Password is required")
    .length(7, "Password must be exactly 7 characters"),

  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export default signUpSchema;
