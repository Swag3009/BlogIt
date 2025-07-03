import React from "react";

import BlogCard from "./Card";

const List = ({ posts }) => (
  <div className="space-y-6">
    {posts.map(({ id, title, description, created_at: createdAt }) => (
      <BlogCard key={id} {...{ title, description, createdAt }} />
    ))}
  </div>
);

export default List;
