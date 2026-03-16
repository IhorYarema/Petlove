import * as yup from "yup";

export const editUserSchema = yup.object({
  name: yup.string().required("Name is required"),

  email: yup
    .string()
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, {
      message: "Invalid email format",
      excludeEmptyString: true,
    })
    .required("Email is required"),

  avatar: yup
    .string()
    .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, {
      message: "Avatar must be valid image URL",
      excludeEmptyString: true,
    }),

  phone: yup.string().matches(/^\+38\d{10}$/, {
    message: "Phone must match +380XXXXXXXXX",
    excludeEmptyString: true,
  }),
});
