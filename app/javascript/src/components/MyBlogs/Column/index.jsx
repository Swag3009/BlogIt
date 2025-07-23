import React from "react";

import dayjs from "dayjs";

import ActionsDropdown from "./Dropdown";
import Title from "./Title";

const COLUMN = [
  {
    title: "TITLE",
    dataIndex: "title",
    key: "title",
    width: 200,
    render: (_, row) => <Title row={row} />,
  },
  {
    title: "CATEGORY",
    dataIndex: "categories",
    key: "categories",
    width: 150,
  },
  {
    title: "LAST PUBLISHED AT",
    dataIndex: "last_published_at",
    key: "last_published_at",
    width: 150,
    render: date => (date ? dayjs(date).format("MMM D, YYYY, h:mm A") : "-"),
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    width: 150,
    render: (_, row) => <ActionsDropdown row={row} />,
  },
];

export default COLUMN;
