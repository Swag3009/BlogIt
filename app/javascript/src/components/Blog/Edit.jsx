import React, { useState, useRef } from "react";

import { Typography, Button } from "@bigbinary/neetoui";
import { Form, Input, Textarea, Select } from "@bigbinary/neetoui/formik";
import { PageLoader, Header } from "components/common";
import { useFetchCategories } from "hooks/reactQuery/useCategoriesApi";
import { useUpdatePost, useDeletePost } from "hooks/reactQuery/usePostsApi";
import { pluck } from "ramda";
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from "react-router-dom";

import { POST_VALIDATION_SCHEMA, MAX } from "./constants";

import routes from "../../route";
import { STATUS } from "../constant";

const EditPost = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const { postData } = location.state || {};
  const formikRef = useRef();
  const { slug, title, description, categories: selectedCategories } = postData;
  const { data: categories = [] } = useFetchCategories();
  const { mutate: updatePost, isLoading } = useUpdatePost();
  const { mutate: deletePost } = useDeletePost();
  const [postStatus, setPostStatus] = useState(STATUS.DRAFT);
  const POST_INITIAL_VALUES = {
    title,
    description,
    categories: selectedCategories || [],
    status: postStatus,
  };

  const handleEdit = ({ title, description, categories }) => {
    const payload = {
      title,
      description,
      category_ids: pluck("id", categories),
      status: postStatus,
    };

    updatePost(
      { slug, payload },
      {
        onSuccess: () => {
          history.push(routes.blogs);
        },
      }
    );
  };

  const handleDelete = () => {
    deletePost(slug, {
      onSuccess: () => {
        history.push(routes.blogs);
      },
    });
  };

  const handleStatusChange = status => {
    setPostStatus(status);
  };

  if (isLoading) return <PageLoader />;

  return (
    <div>
      <div className="flex-1 rounded-xl border bg-white p-8 shadow">
        <Form
          className="space-y-6"
          ref={formikRef}
          formikProps={{
            initialValues: POST_INITIAL_VALUES,
            validationSchema: POST_VALIDATION_SCHEMA,
            onSubmit: handleEdit,
          }}
        >
          <div className="mb-6 flex items-center justify-between">
            <Typography style="h1">{t("title.editBlogPost")}</Typography>
            <div className="flex space-x-4">
              <Button style="secondary" type="reset">
                {t("buttons.cancel")}
              </Button>
              <Header
                isEdit
                handleDelete={handleDelete}
                handleStatusChange={handleStatusChange}
                status={postStatus}
              />
            </div>
          </div>
          <Input
            required
            label={t("labels.title")}
            maxLength={MAX.LENGTH.TITLE}
            name="title"
            placeholder={t("placeHolder.enterTitle")}
          />
          <Select
            isMulti
            required
            addButtonLabel={t("labels.add")}
            defaultValue={selectedCategories}
            label={t("labels.categories")}
            name="categories"
            optionRemapping={{ label: "name", value: "id" }}
            options={categories}
            placeholder={t("placeHolder.selectCategories")}
          />
          <Textarea
            required
            label={t("labels.description")}
            maxLength={MAX.LENGTH.DESCRIPTION}
            name="description"
            placeholder={t("placeHolder.enterDescription")}
            rows={MAX.ROW}
          />
        </Form>
      </div>
    </div>
  );
};

export default EditPost;
