import React from "react";

import { Typography, Tag, Avatar, Button } from "@bigbinary/neetoui";
import { ErrorMessage, PageLoader } from "components/common";
import dayjs from "dayjs";
import { useShowPost } from "hooks/reactQuery/usePostsApi";
import { isNotEmpty } from "ramda";
import { useTranslation } from "react-i18next";
import { useParams, useHistory } from "react-router-dom";

const Show = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const history = useHistory();
  const {
    data: {
      post: {
        title,
        description,
        author_name,
        categories,
        can_edit: canEdit,
        updated_at: updatedAt,
        status,
      } = {},
    } = {},
    isLoading,
    isError,
  } = useShowPost(slug);

  const handleNaviagteToEdit = () => {
    history.push({
      pathname: `/blogs/${slug}/edit`,
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
          <div className="flex items-center space-x-4">
            <Typography style="h1">{title}</Typography>
            {status === "draft" && (
              <Tag label={t("labels.draft")} style="danger" />
            )}
          </div>
          {canEdit && (
            <Button
              style="link"
              tooltipProps={{
                content: t("tooltip.edit"),
              }}
              onClick={handleNaviagteToEdit}
            >
              <i className="ri-edit-line text-2xl text-black" />
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
              {dayjs(updatedAt).format("DD MMMM YYYY")}
            </Typography>
          </div>
        </div>
      </header>
      <Typography style="body1">{description}</Typography>
    </div>
  );
};

export default Show;
