/* eslint-disable no-unused-vars */
import React from "react";

import { Button } from "@bigbinary/neetoui";

import { useFetchPosts } from "../../hooks/reactQuery/usePostsApi";

const Blogs = () => {
  const { data: { posts = {} } = {} } = useFetchPosts();

  return (
    <div>
      <h1>Hello</h1>
      <Button
        label="Button"
        style="primary"
        onClick={function noRefCheck() {}}
      />
    </div>
  );
};

export default Blogs;
