import React from "react";

import { Dropdown, Typography } from "@bigbinary/neetoui";
import { STATUS } from "components/constant";
import { useUpdatePost, useDeletePost } from "hooks/reactQuery/usePostsApi";
import { useTranslation } from "react-i18next";

const ActionsDropdown = ({ row: { status, slug } }) => {
  const { Menu, MenuItem } = Dropdown;
  const isDraft = status === STATUS.DRAFT;
  const { t } = useTranslation();
  const { mutate: updatePost } = useUpdatePost();
  const { mutate: deletePost } = useDeletePost();

  const handleStatus = () => {
    const payload = { status: isDraft ? STATUS.PUBLISH : STATUS.DRAFT };
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
        buttonStyle="link"
        icon="ri-more-fill text-lg text-black"
        strategy="fixed"
      >
        <Menu>
          <MenuItem.Button onClick={handleStatus}>
            {isDraft ? t("dropdown.publish") : t("dropdown.unpublish")}
          </MenuItem.Button>
          <MenuItem.Button style="danger" onClick={handleDelete}>
            {t("dropdown.delete")}
          </MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
  );
};

export default ActionsDropdown;
