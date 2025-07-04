import React from "react";

import { NoData } from "@bigbinary/neetoui";
import { t } from "i18next";

const ErrorMessage = () => (
  <div className="flex h-screen w-full items-center justify-center">
    <NoData title={t("errors.someThingWentWrong")} />
  </div>
);

export default ErrorMessage;
