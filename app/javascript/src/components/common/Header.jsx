import React from "react";

import { ActionDropdown } from "@bigbinary/neetoui";
import { useTranslation } from "react-i18next";

const Header = ({ handleStatusChange, isEdit, handleDelete }) => {
  const { Menu, MenuItem, Divider } = ActionDropdown;
  const { t } = useTranslation();

  return (
    <div className="z-50 flex justify-end space-x-4">
      <ActionDropdown
        buttonStyle="primary"
        label="Primary"
        buttonProps={{
          className: "bg-black",
        }}
        dropdownProps={{
          buttonProps: {
            className: "bg-black",
          },
        }}
      >
        <Menu>
          <MenuItem.Button onClick={() => handleStatusChange("draft")}>
            {t("dropdown.saveAsDraft")}
          </MenuItem.Button>
          <MenuItem.Button onClick={() => handleStatusChange("publish")}>
            {t("dropdown.publish")}
          </MenuItem.Button>
          {isEdit && (
            <>
              <Divider />
              <MenuItem.Button style="danger" onClick={handleDelete}>
                {t("dropdown.delete")}
              </MenuItem.Button>
            </>
          )}
        </Menu>
      </ActionDropdown>
    </div>
  );
};

export default Header;
