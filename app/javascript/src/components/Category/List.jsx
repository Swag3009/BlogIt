import React, { useState } from "react";

import { Typography } from "@bigbinary/neetoui";
import classnames from "classnames";

const List = ({ category }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={classnames(
        "my-2 cursor-pointer rounded-lg border border-gray-300 px-3 py-2 transition-all duration-300 ease-in-out",
        {
          "bg-black text-white": isSelected,
          "hover:bg-gray-900 hover:text-white hover:shadow-md": !isSelected,
        }
      )}
      onClick={() => setIsSelected(prev => !prev)}
    >
      <Typography>{category}</Typography>
    </div>
  );
};

export default List;
