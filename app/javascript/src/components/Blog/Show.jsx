import React from "react";

import { Typography, Tag, Avatar, Button } from "@bigbinary/neetoui";
import { ErrorMessage, PageLoader } from "components/common";
import dayjs from "dayjs";
import { useShowPost } from "hooks/reactQuery/usePostsApi";
import { isNotEmpty } from "ramda";
import { useParams, useHistory } from "react-router-dom";

const Show = () => {
  const { slug } = useParams();
  const history = useHistory();
  const {
    data: {
      post: {
        id,
        title,
        description,
        author_name,
        categories,
        can_edit: canEdit,
        created_at: createdAt,
      } = {},
    } = {},
    isLoading,
    isError,
  } = useShowPost(slug);

  const handleNaviagteToEdit = () => {
    const postData = {
      title,
      description,
      author_name,
      categories,
      createdAt,
      id,
    };

    history.push({
      pathname: `/blogs/${slug}/edit`,
      state: { postData },
    });
  };

  if (isLoading) return <PageLoader />;

  if (isError) return <ErrorMessage />;

  return (
    <div className="space-y-6">
      <header className="space-y-2 border-b pb-4">
        {isNotEmpty(categories) && (
          <div className="space-x-2">
            {categories.map(({ id, name }) => (
              <Tag key={id} label={name} style="info" type="outline" />
            ))}
          </div>
        )}
        <div className="flex items-center justify-between">
          <Typography style="h1">{title}</Typography>
          {canEdit && (
            <Button style="link" onClick={handleNaviagteToEdit}>
              <i className="ri-edit-line text-2xl" />
            </Button>
          )}
        </div>
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
    </div>
  );
};

export default Show;
