import { emailRegExp } from "@/constants/regex";
import * as yup from "yup";

export const loginYupSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Must be valid email syntax")
    .matches(emailRegExp, "Must be valid email syntax"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters required")
    .trim()
    .required("Password is required"),
});

export const addMenuYupSchema = yup.object().shape({
  // category_id: yup.string().required("category id is required"),
  title: yup
    .string()
    .trim()
    .max(30, "Maximum 30 characters")
    .required("Title is required"),
  description: yup
    .string()
    .trim()
    .max(500, "Maximum 5000 characters")
    .required("Description is required"),
  // image: yup.mixed(),
  // upload_file: yup.mixed(),
  price: yup
    .string()
    .required("Price is required")
    .max(100, "Maximum 100 characters"),
});
