import React from "react";

import { Tooltip } from "@bigbinary/neetoui";
import Logger from "js-logger";
import { Link } from "react-router-dom";

const Title = ({ row: { title, slug } }) => {
  Logger.info(slug);

  return (
    <Tooltip content={title} position="top">
      <Link
        className="inline-block max-w-[220px] truncate text-indigo-600 hover:underline"
        to={`/blogs/${slug}/edit`}
      >
        {title}
      </Link>
    </Tooltip>
  );
};

export default Title;
