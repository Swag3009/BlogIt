import React from "react";

import { ActionDropdown } from "@bigbinary/neetoui";
import { useFormikContext } from "formik";
import { useTranslation } from "react-i18next";

import { STATUS } from "../constant";

const Header = ({ handleStatusChange, isEdit, handleDelete, status }) => {
  const { Menu, MenuItem, Divider } = ActionDropdown;
  const { submitForm } = useFormikContext();

  const { t } = useTranslation();
  const statusLabel = t(
    status === "draft" ? "dropdown.saveAsDraft" : "dropdown.publish"
  );

  return (
    <div className="z-50 flex justify-end space-x-4">
      <ActionDropdown
        buttonStyle="primary"
        label={statusLabel}
        buttonProps={{
          className: "bg-black",
        }}
        dropdownProps={{
          buttonProps: {
            className: "bg-black",
          },
        }}
        onClick={submitForm}
      >
        <Menu>
          <MenuItem.Button onClick={() => handleStatusChange(STATUS.DRAFT)}>
            {t("dropdown.saveAsDraft")}
          </MenuItem.Button>
          <MenuItem.Button onClick={() => handleStatusChange(STATUS.PUBLISH)}>
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
