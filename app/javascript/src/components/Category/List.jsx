import React from "react";

import { Typography } from "@bigbinary/neetoui";
import classnames from "classnames";

const List = ({ category, isSelected, onClick, isDisabled }) => (
  <div
    className={classnames(
      "my-2 cursor-pointer rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out",
      {
        "border-blue-300 bg-blue-100 text-blue-800 shadow-sm": isSelected,
        "border-gray-300 bg-white text-gray-800 hover:bg-gray-100 hover:shadow":
          !isSelected && !isDisabled,
      }
    )}
    onClick={onClick}
  >
    <Typography>{category}</Typography>
  </div>
);

export default List;
