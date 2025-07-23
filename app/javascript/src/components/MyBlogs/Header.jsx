import React from "react";

import { Typography } from "@bigbinary/neetoui";
import { t } from "i18next";

const Header = () => (
  <div>
    <Typography style="h1">{t("title.myBlogPosts")}</Typography>
  </div>
);

export default Header;
