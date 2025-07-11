import { t } from "i18next";
import * as yup from "yup";

export const POST_INITIAL_VALUES = {
  title: "",
  description: "",
  categories: [],
};

export const POST_VALIDATION_SCHEMA = yup.object().shape({
  title: yup
    .string()
    .max(125, t("errors.titleMax"))
    .required(t("errors.titleRequired")),
  description: yup
    .string()
    .max(10000, t("errors.descriptionMax"))
    .required(t("errors.descriptionRequired")),
  categories: yup.array().min(1, t("errors.categoriesAtLeastOne")),
});
