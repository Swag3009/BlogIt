import React from "react";

import { Typography } from "@bigbinary/neetoui";
import dayjs from "dayjs";

const Card = ({ title, description, createdAt }) => (
  <div className="space-y-2 border-b border-gray-300 pb-4">
    <Typography style="h2">{title}</Typography>
    <Typography className="line-clamp-2 w-4/5" lineHeight="tight" style="body2">
      {description}
    </Typography>
    <Typography className="text-gray-500" style="body3" weight="semibold">
      {dayjs(createdAt).format("DD MMMM YYYY")}
    </Typography>
  </div>
);

export default Card;
