import React from "react";

import { NoData, Typography } from "@bigbinary/neetoui";
import { PageLoader, ErrorMessage, Container } from "components/common";
import { isEmpty } from "ramda";
import { useTranslation } from "react-i18next";

import BlogCard from "./Card";

import { useFetchPosts } from "../../hooks/reactQuery/usePostsApi";

const Blogs = () => {
  const { t } = useTranslation();
  const { data: { posts = [] } = {}, isError, isFetching } = useFetchPosts();

  if (isFetching) return <PageLoader />;

  if (isError) return <ErrorMessage />;

  return (
    <Container className="ml-16 w-full p-6">
      <Typography className="mb-8" style="h1">
        {t("title.blogPost")}
      </Typography>
      {isEmpty(posts) ? (
        <NoData title="No blog posts available." />
      ) : (
        <div className="space-y-6">
          {posts.map(({ id, title, description, created_at: createdAt }) => (
            <BlogCard key={id} {...{ title, description, createdAt }} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Blogs;
