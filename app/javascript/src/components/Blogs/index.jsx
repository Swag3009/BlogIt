import React from "react";

import { NoData, Typography } from "@bigbinary/neetoui";
import { isEmpty } from "ramda";
import { useTranslation } from "react-i18next";

import BlogList from "./List";

import { useFetchPosts } from "../../hooks/reactQuery/usePostsApi";
import { PageLoader, ErrorMessage } from "../common";
import NavBar from "../NavBar";

const Blogs = () => {
  const { t } = useTranslation();
  const { data: { posts = [] } = {}, isError, isFetching } = useFetchPosts();

  if (isFetching) return <PageLoader />;

  if (isError) return <ErrorMessage />;

  return (
    <div className="flex">
      <NavBar />
      <main className="ml-16 w-full p-6">
        <Typography className="mb-8" style="h1">
          {t("title.blogPost")}
        </Typography>
        {isEmpty(posts) ? (
          <NoData title="No blog posts available." />
        ) : (
          <BlogList posts={posts} />
        )}
      </main>
    </div>
  );
};

export default Blogs;
