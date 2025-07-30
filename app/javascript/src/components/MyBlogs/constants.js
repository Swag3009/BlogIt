import { t } from "i18next";
import * as yup from "yup";

export const DEFAULT_PAGE_SIZE = 10;
export const COLUMN_DROPDOWN = [
  {
    label: t("labels.column.title"),
    key: "title",
  },
  {
    label: t("labels.column.category"),
    key: "categories",
  },
  {
    label: t("labels.column.lastPublishedAt"),
    key: "last_published_at",
  },
  {
    label: t("labels.column.status"),
    key: "status",
  },
];

export const SELECTED_COLUMNS = [
  "title",
  "categories",
  "last_published_at",
  "status",
];

export const TITLE_COLUMN = "title";

export const FILTER_VALIDATION_SCHEMA = yup.object().shape({
  title: yup
    .string()
    .max(125, t("errors.titleMax"))
    .required(t("errors.titleRequired")),
  categories: yup.array().min(1, t("errors.categoriesAtLeastOne")),
  status: yup.array().min(1, t("errors.categoriesAtLeastOne")),
});

export const FILTER_INITIAL_VALUES = {
  title: "",
  categories: [],
  status: [],
};
