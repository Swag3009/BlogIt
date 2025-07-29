import React from "react";

import {
  Button,
  Typography,
  ActionDropdown,
  Checkbox,
} from "@bigbinary/neetoui";
import { includes, equals } from "ramda";
import { useTranslation } from "react-i18next";

import { COLUMN_DROPDOWN, TITLE_COLUMN } from "./constants";

const Header = ({ selectedColumns, handleSelectedColumns }) => {
  const { t } = useTranslation();
  const { Menu, MenuItem } = ActionDropdown;

  return (
    <div className="flex justify-between">
      <Typography style="h1">{t("title.myBlogPosts")}</Typography>
      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-4">
          <ActionDropdown
            buttonStyle="primary"
            label={t("labels.columns")}
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
              {COLUMN_DROPDOWN.map(({ label, key }) => (
                <MenuItem.Button key={key}>
                  <div
                    className="flex items-center p-1"
                    onClick={event => event.stopPropagation()}
                  >
                    <Checkbox
                      checked={includes(key, selectedColumns)}
                      disabled={equals(key, TITLE_COLUMN)}
                      id={key}
                      label={label}
                      onChange={({ target: { checked } }) => {
                        handleSelectedColumns(key, checked);
                      }}
                    />
                  </div>
                </MenuItem.Button>
              ))}
            </Menu>
          </ActionDropdown>
          <Button style="link">
            <i className="ri-filter-2-line text-3xl text-black" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
