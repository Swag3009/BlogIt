import React from "react";

import { Dropdown, Typography } from "@bigbinary/neetoui";

const ActionsDropdown = ({ row: { status } }) => {
  const isDraft = status.toLowerCase() === "draft";
  const handleAction = () => {};

  return (
    <div className="flex items-center justify-between">
      <Typography className="capitalize" style="body2">
        {status}
      </Typography>
      <Dropdown buttonStyle="text" icon="ri-more-fill text-lg">
        <Dropdown.Menu>
          <Dropdown.MenuItem.Button onClick={() => handleAction("publish")}>
            {isDraft ? "Publish" : "Unpublish"}
          </Dropdown.MenuItem.Button>
          <Dropdown.MenuItem.Button
            style="danger"
            onClick={() => handleAction("delete")}
          >
            Delete
          </Dropdown.MenuItem.Button>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ActionsDropdown;
