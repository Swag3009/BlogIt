import React from "react";

import { Typography } from "@bigbinary/neetoui";

import BlogList from "./List";

import { useFetchPosts } from "../../hooks/reactQuery/usePostsApi";

const Blogs = () => {
  const { data: { posts = [] } = {} } = useFetchPosts();

  return (
    <div className="mx-auto p-6">
      <Typography className="mb-8" style="h1">
        Blog posts
      </Typography>
      <BlogList posts={posts} />
    </div>
  );
};

export default Blogs;
