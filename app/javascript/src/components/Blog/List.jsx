// BlogListContent.jsx
import { QUERY_KEYS } from "constants/query";

import React from "react";

import { NoData } from "@bigbinary/neetoui";
import { PageLoader, ErrorMessage } from "components/common";
import { useFetchPosts } from "hooks/reactQuery/usePostsApi";
import useQueryParam from "hooks/useQueryParam";
import { isEmpty } from "ramda";
import { useTranslation } from "react-i18next";

import BlogCard from "./Card";

const BlogListContent = () => {
  const { t } = useTranslation();
  const { query } = useQueryParam();

  const {
    data: posts = [],
    isError,
    isFetching,
  } = useFetchPosts(query.get(QUERY_KEYS.CATEGORIES) || "");

  if (isFetching) return <PageLoader />;

  if (isError) return <ErrorMessage />;

  if (isEmpty(posts)) return <NoData title={t("message.noBlogPost")} />;

  return (
    <div className="space-y-6">
      {posts.map(
        ({
          id,
          title,
          categories,
          slug,
          author_name,
          created_at: createdAt,
        }) => (
          <BlogCard
            key={id}
            {...{ title, categories, createdAt, slug, author_name }}
          />
        )
      )}
    </div>
  );
};

export default BlogListContent;
