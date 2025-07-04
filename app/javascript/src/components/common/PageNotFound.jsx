import React from "react";

import { NoData } from "@bigbinary/neetoui";
import { t } from "i18next";

import routes from "../../route";

const PageNotFound = () => (
  <div className="absolute left-1/3 top-1/3">
    <NoData
      title={t("errors.pageNotFound")}
      primaryButtonProps={{
        label: t("buttons.backToHome"),
        className: "bg-neutral-800 hover:bg-neutral-950",
        to: routes.root,
      }}
    />
  </div>
);

export default PageNotFound;
