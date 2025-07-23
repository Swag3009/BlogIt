import React from "react";

import { Dropdown, Typography } from "@bigbinary/neetoui";
import { useUpdatePost, useDeletePost } from "hooks/reactQuery/usePostsApi";

const ActionsDropdown = ({ row: { status, slug } }) => {
  const { Menu, MenuItem } = Dropdown;
  const isDraft = status === "draft";
  const { mutate: updatePost } = useUpdatePost();
  const { mutate: deletePost } = useDeletePost();

  const handleStatus = () => {
    const payload = { status: isDraft ? "published" : "draft" };
    updatePost({ slug, payload });
  };

  const handleDelete = () => {
    deletePost(slug);
  };

  return (
    <div className="flex items-center justify-between">
      <Typography className="capitalize" style="body2">
        {status}
      </Typography>
      <Dropdown
        appendTo={() => document.body}
        buttonStyle="text"
        icon="ri-more-fill text-lg"
        strategy="fixed"
      >
        <Menu>
          <MenuItem.Button onClick={handleStatus}>
            {isDraft ? "Publish" : "Unpublish"}
          </MenuItem.Button>
          <MenuItem.Button style="danger" onClick={handleDelete}>
            Delete
          </MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
  );
};

export default ActionsDropdown;
