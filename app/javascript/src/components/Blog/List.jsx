import React from "react";

import { NoData, Typography, Button } from "@bigbinary/neetoui";
import { PageLoader, ErrorMessage, Container } from "components/common";
import { useFetchPosts } from "hooks/reactQuery/usePostsApi";
import { isEmpty } from "ramda";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import BlogCard from "./Card";

import routes from "../../route";

const Blogs = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const { data: posts = [], isError, isFetching } = useFetchPosts();
  if (isFetching) return <PageLoader />;

  if (isError) return <ErrorMessage />;

  return (
    <Container>
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
      {isEmpty(posts) ? (
        <NoData title={t("message.noBlogPost")} />
      ) : (
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
      )}
    </Container>
  );
};

export default Blogs;
