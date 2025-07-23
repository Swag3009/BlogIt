import React, { useState } from "react";

import {
  ActionDropdown,
  Alert,
  Button,
  Typography,
  Dropdown,
} from "@bigbinary/neetoui";
import { useFormikContext } from "formik";
import { useTranslation } from "react-i18next";

import { STATUS } from "../constant";

const Header = ({
  handleStatusChange,
  isEdit,
  handleDelete,
  handlePreview,
  status,
  title,
}) => {
  const { Menu, MenuItem } = ActionDropdown;
  const { submitForm } = useFormikContext();
  const [showPostDeleteAlert, setShowPostDeleteAlert] = useState(false);

  const { t } = useTranslation();
  const statusLabel = t(
    status === "draft" ? "dropdown.saveAsDraft" : "dropdown.publish"
  );

  return (
    <div className="z-50 flex justify-between space-x-4">
      <Typography style="h1">{t(`title.${title}`)}</Typography>
      <div className="flex items-center space-x-4">
        <Button
          style="link"
          tooltipProps={{
            content: t("tooltip.preview"),
            position: "left",
          }}
          onClick={() => {
            handlePreview();
            submitForm();
          }}
        >
          <i className="ri-arrow-right-up-line text-2xl text-black" />
        </Button>
        <Button style="secondary" type="reset">
          {t("buttons.cancel")}
        </Button>
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
          </Menu>
        </ActionDropdown>
        {isEdit && (
          <Dropdown
            buttonStyle="link"
            icon={() => <i className="ri-more-line text-2xl text-black" />}
          >
            <Menu>
              <MenuItem.Button
                style="danger"
                onClick={() => setShowPostDeleteAlert(true)}
              >
                {t("dropdown.delete")}
              </MenuItem.Button>
            </Menu>
          </Dropdown>
        )}
      </div>
      <Alert
        isOpen={showPostDeleteAlert}
        message={t("message.deletePost")}
        submitButtonLabel={t("buttons.delete")}
        title={t("title.alertToDeletePost")}
        onClose={() => setShowPostDeleteAlert(false)}
        onSubmit={handleDelete}
      />
    </div>
  );
};

export default Header;
