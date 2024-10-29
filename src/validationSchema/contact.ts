import * as yup from "yup";
export const phoneRegExp = /^\+?\d*$/;
export const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const contactYupSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .max(24, "Maximum 24 character")
    .required("This field is required"),
  phone_number: yup
    .string()
    .trim()
    .required("Phone number is required")
    .matches(phoneRegExp, "Must be valid phone number")
    .min(8, "Minimum 8 numbers")
    .max(12, "Maximum 12 numbers"),
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Must be valid email syntax")
    .matches(emailRegExp, "Must be valid email syntax"),
  message: yup
    .string()
    .trim()
    .required("Message is required")
    .min(10, "Minimum 10 chracter")
    .max(500, "Maximum 500 chracter"),
});
