import * as yup from "yup";

export const POST_INITIAL_VALUES = {
  title: "",
  description: "",
};

export const POST_VALIDATION_SCHEMA = yup.object().shape({
  title: yup
    .string()
    .max(125, "Title must be at most 125 characters")
    .required("Title is required"),
  description: yup
    .string()
    .max(10000, "Description must be at most 10000 characters")
    .required("Description is required"),
});
