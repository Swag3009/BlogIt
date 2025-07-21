import React from "react";

import { NoData } from "@bigbinary/neetoui";
import { t } from "i18next";

import routes from "../../route";

const PageNotFound = () => (
  <div className="flex min-h-screen items-center justify-center">
    <NoData
      title={t("errors.pageNotFound")}
      primaryButtonProps={{
        label: t("buttons.backToHome"),
        className: "bg-neutral-800 hover:bg-neutral-950",
        to: routes.blogs,
      }}
    />
  </div>
);

export default PageNotFound;
