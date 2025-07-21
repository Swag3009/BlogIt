import { QUERY_KEYS } from "constants/query";

import React, { useState, useEffect } from "react";

import { NoData, Pagination } from "@bigbinary/neetoui";
import { PageLoader, ErrorMessage } from "components/common";
import { useFetchPosts } from "hooks/reactQuery/usePostsApi";
import useQueryParam from "hooks/useQueryParam";
import { isEmpty } from "ramda";
import { useTranslation } from "react-i18next";

import BlogCard from "./Card";
import { DEFAULT_PAGE_ITEMS, DEFAULT_PAGE_NUMBER } from "./constants";

const BlogListContent = () => {
  const { t } = useTranslation();
  const { query, setQueryParam } = useQueryParam();
  const initialPage = Number(query.get(QUERY_KEYS.PAGE) || DEFAULT_PAGE_NUMBER);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const selectedCategories = query.get(QUERY_KEYS.CATEGORIES) || "";

  const postFetchParams = {
    selectedCategories,
    currentPage,
    postsPerPage: DEFAULT_PAGE_ITEMS,
  };

  const {
    data: { posts = [], total_entries: totalEntries } = {},
    isError,
    isFetching,
  } = useFetchPosts(postFetchParams);

  useEffect(() => {
    if (currentPage === DEFAULT_PAGE_NUMBER) {
      setQueryParam(QUERY_KEYS.PAGE, null);
    } else setQueryParam(QUERY_KEYS.PAGE, currentPage.toString());
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(DEFAULT_PAGE_NUMBER);
  }, [selectedCategories]);

  if (isFetching) return <PageLoader />;

  if (isError) return <ErrorMessage />;

  if (isEmpty(posts)) return <NoData title={t("message.noBlogPost")} />;

  return (
    <div className="flex min-h-screen flex-col justify-between">
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
      <div className="mt-6 flex justify-end">
        <Pagination
          count={totalEntries}
          navigate={page => setCurrentPage(page)}
          pageNo={currentPage}
          pageSize={DEFAULT_PAGE_ITEMS}
        />
      </div>
    </div>
  );
};

export default BlogListContent;
