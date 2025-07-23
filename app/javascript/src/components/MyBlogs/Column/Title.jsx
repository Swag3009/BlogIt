import React from "react";

import { Tooltip } from "@bigbinary/neetoui";
import { Link } from "react-router-dom";

const Title = ({ row }) => (
  <Tooltip content={row.title} position="top">
    <Link
      className="inline-block max-w-[220px] truncate text-indigo-600 hover:underline"
      to={`/posts/${row.slug}/edit`}
    >
      {row.title}
    </Link>
  </Tooltip>
);

export default Title;
