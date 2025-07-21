import React from "react";

import { Avatar, Typography, Button } from "@bigbinary/neetoui";

const Content = ({ onSignOut, t, name, email }) => (
  <div className="ml-20 inline-block rounded border bg-white p-4 shadow">
    <div className="flex items-center space-x-3">
      <Avatar size="large" user={{ name }} />
      <div>
        <Typography style="h5">{name}</Typography>
        <Typography className="text-gray-500" style="body3">
          {email}
        </Typography>
      </div>
    </div>
    <hr className="my-3" />
    <Button
      className="text-red-500"
      label={t("labels.signout")}
      style="link"
      onClick={onSignOut}
    />
  </div>
);

export default Content;
