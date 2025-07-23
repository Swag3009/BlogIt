import React from "react";

import { Typography, Tag } from "@bigbinary/neetoui";
import dayjs from "dayjs";
import { isNotEmpty } from "ramda";
import { useHistory } from "react-router-dom";

const Card = ({ title, categories, author_name, createdAt, slug }) => {
  const history = useHistory();
  const handleOnClick = () => {
    history.push(`blogs/${slug}/show`);
  };

  return (
    <div
      className="space-y-2 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
      onClick={handleOnClick}
    >
      <Typography style="h2">{title}</Typography>
      {isNotEmpty(categories) && (
        <div className="space-x-2">
          {categories.map(({ id, name }) => (
            <Tag key={id} label={name} style="info" type="outline" />
          ))}
        </div>
      )}
      <div className="mt-1">
        <Typography className=" text-gray-700" style="body3" weight="bold">
          {author_name}
        </Typography>
        <Typography className="text-gray-500" style="body3" weight="semibold">
          {dayjs(createdAt).format("DD MMMM YYYY")}
        </Typography>
      </div>
    </div>
  );
};

export default Card;
