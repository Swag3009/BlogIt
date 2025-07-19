import { t } from "i18next";
import * as yup from "yup";

export const SIGN_UP_INITIAL_VALUES = {
  name: "",
  email: "",
  organization: [],
  password: "",
  passwordConfirmation: "",
};

export const SIGN_IN_INITIAL_VALUES = {
  email: "",
  password: "",
};

export const SIGN_UP_VALIDATION_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .required(t("errors.nameRequired"))
    .max(125, t("errors.nameMax")),

  email: yup
    .string()
    .required(t("errors.emailRequired"))
    .email(t("errors.invalidEmail"))
    .max(255, t("errors.emailMax")),

  organization: yup
    .object()
    .required(t("errors.organizationRequired"))
    .typeError(t("errors.organizationRequired")),

  password: yup
    .string()
    .required(t("errors.passwordRequired"))
    .min(6, t("errors.passwordMin")),

  passwordConfirmation: yup
    .string()
    .required(t("errors.passwordConfirmationRequired"))
    .oneOf([yup.ref("password"), null], t("errors.passwordMatch")),
});

export const SIGN_IN_VALIDATION_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .required(t("errors.emailRequired"))
    .email(t("errors.invalidEmail"))
    .max(255, t("errors.emailMax")),

  password: yup
    .string()
    .required(t("errors.passwordRequired"))
    .min(6, t("errors.passwordMin")),
});
