import React from "react";

import { Typography, Tag, Avatar } from "@bigbinary/neetoui";
import { Container, ErrorMessage, PageLoader } from "components/common";
import dayjs from "dayjs";
import { useShowPost } from "hooks/reactQuery/usePostsApi";
import { isNotEmpty } from "ramda";
import { useParams } from "react-router-dom";

const Show = () => {
  const { slug } = useParams();
  const {
    data: {
      post: {
        title,
        description,
        author_name,
        categories,
        created_at: createdAt,
      } = {},
    } = {},
    isLoading,
    isError,
  } = useShowPost(slug);

  if (isLoading) return <PageLoader />;

  if (isError) return <ErrorMessage />;

  return (
    <Container className="space-y-6">
      <header className="space-y-2 border-b pb-4">
        {isNotEmpty(categories) && (
          <div className="space-x-2">
            {categories.map(({ id, name }) => (
              <Tag key={id} label={name} style="info" type="outline" />
            ))}
          </div>
        )}
        <Typography style="h1">{title}</Typography>
        <div className="flex space-x-2">
          <Avatar
            user={{
              name: author_name,
            }}
          />
          <div>
            <Typography className=" text-gray-700" style="body3" weight="bold">
              {author_name}
            </Typography>
            <Typography
              className="text-gray-500"
              style="body3"
              weight="semibold"
            >
              {dayjs(createdAt).format("DD MMMM YYYY")}
            </Typography>
          </div>
        </div>
      </header>
      <Typography style="body1">{description}</Typography>
    </Container>
  );
};

export default Show;
