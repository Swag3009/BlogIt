import React from "react";

import dayjs from "dayjs";
import { t } from "i18next";

import ActionsDropdown from "./Dropdown";
import Title from "./Title";

const COLUMN = [
  {
    title: t("title.column.title"),
    dataIndex: "title",
    key: "title",
    width: 200,
    render: (_, row) => <Title row={row} />,
  },
  {
    title: t("title.column.category"),
    dataIndex: "categories",
    key: "categories",
    width: 150,
  },
  {
    title: t("title.column.lastPublishedAt"),
    dataIndex: "last_published_at",
    key: "last_published_at",
    width: 150,
    render: date => (date ? dayjs(date).format("MMM D, YYYY, h:mm A") : "-"),
  },
  {
    title: t("title.column.status"),
    dataIndex: "status",
    key: "status",
    width: 150,
    render: (_, row) => <ActionsDropdown row={row} />,
  },
];

export default COLUMN;
