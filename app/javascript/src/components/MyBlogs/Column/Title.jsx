import React from "react";

import { Tooltip } from "@bigbinary/neetoui";
import { Link } from "react-router-dom";

const Title = ({ row: { title, slug } }) => (
  <Tooltip content={title} position="top">
    <Link
      className="inline-block truncate text-indigo-600 hover:underline"
      to={`/blogs/${slug}/edit`}
    >
      {title}
    </Link>
  </Tooltip>
);

export default Title;
