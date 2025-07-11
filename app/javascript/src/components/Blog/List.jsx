import React from "react";

import { NoData, Typography } from "@bigbinary/neetoui";
import { PageLoader, ErrorMessage, Container } from "components/common";
import { useFetchPosts } from "hooks/reactQuery/usePostsApi";
import Logger from "js-logger";
import { isEmpty } from "ramda";
import { useTranslation } from "react-i18next";

import BlogCard from "./Card";

const Blogs = () => {
  const { t } = useTranslation();
  const { data: posts = [], isError, isFetching } = useFetchPosts();
  Logger.info(posts);

  if (isFetching) return <PageLoader />;

  if (isError) return <ErrorMessage />;

  return (
    <Container>
      <Typography className="mb-8" style="h1">
        {t("title.blogPost")}
      </Typography>
      {isEmpty(posts) ? (
        <NoData title={t("message.noBlogPost")} />
      ) : (
        <div className="space-y-6">
          {posts.map(
            ({ id, title, description, slug, created_at: createdAt }) => (
              <BlogCard key={id} {...{ title, description, createdAt, slug }} />
            )
          )}
        </div>
      )}
    </Container>
  );
};

export default Blogs;
