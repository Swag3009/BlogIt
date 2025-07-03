import React from "react";

import { NoData, Typography } from "@bigbinary/neetoui";
import { isEmpty } from "ramda";

import BlogList from "./List";

import { useFetchPosts } from "../../hooks/reactQuery/usePostsApi";
import { PageLoader, ErrorMessage } from "../common";

const Blogs = () => {
  const { data: { posts = [] } = {}, isError, isFetching } = useFetchPosts();

  if (isFetching) return <PageLoader />;

  if (isError) return <ErrorMessage />;

  return (
    <div className="mx-auto p-6">
      <Typography className="mb-8" style="h1">
        Blog posts
      </Typography>
      {isEmpty(posts) ? (
        <NoData title="No blog posts available." />
      ) : (
        <BlogList posts={posts} />
      )}
    </div>
  );
};

export default Blogs;
