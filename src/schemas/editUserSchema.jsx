import * as yup from "yup";

export const editUserSchema = yup.object({
  name: yup.string().required("Name is required"),

  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Invalid email format",
    )
    .required("Email is required"),

  avatar: yup
    .string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      "Avatar must be valid image URL",
    )
    .required("Avatar is required"),

  phone: yup
    .string()
    .matches(/^\+38\d{10}$/, "Phone must match +380XXXXXXXXX")
    .required("Phone is required"),
});
