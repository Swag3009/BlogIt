import React from "react";

import { Typography, Button } from "@bigbinary/neetoui";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import BlogList from "./List";

import routes from "../../route";

const Blogs = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <div>
      <div className="flex justify-between pb-8">
        <Typography style="h1">{t("title.blogPost")}</Typography>
        <Button
          className="bg-black hover:bg-gray-600"
          style="primary"
          onClick={() => history.push(routes.createBlog)}
        >
          {t("buttons.addNewBlogPost")}
        </Button>
      </div>
      <BlogList />
    </div>
  );
};

export default Blogs;
