import { t } from "i18next";
import * as yup from "yup";

export const CATEGORY_INITIAL_VALUES = {
  name: "",
};

export const CATEGORY_VALIDATION_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .max(125, t("errors.nameMax"))
    .required(t("errors.nameRequired")),
});
