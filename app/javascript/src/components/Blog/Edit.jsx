import React, { useState, useRef } from "react";

import { Form, Input, Textarea, Select } from "@bigbinary/neetoui/formik";
import { PageLoader, Header, ErrorMessage } from "components/common";
import { useFetchCategories } from "hooks/reactQuery/useCategoriesApi";
import {
  useUpdatePost,
  useDeletePost,
  useShowPost,
} from "hooks/reactQuery/usePostsApi";
import { pluck } from "ramda";
import { useTranslation } from "react-i18next";
import { useHistory, useParams } from "react-router-dom";

import { POST_VALIDATION_SCHEMA, MAX } from "./constants";

import routes from "../../route";
import { STATUS } from "../constant";

const EditPost = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { slug } = useParams();

  const {
    data: {
      post: { title, description, categories: selectedCategories } = {},
    } = {},
    isFetching,
    isError,
  } = useShowPost(slug);
  const formikRef = useRef();
  const { data: categories = [] } = useFetchCategories();
  const { mutate: updatePost, isLoading } = useUpdatePost();
  const { mutate: deletePost } = useDeletePost();
  const [isPreview, setIsPreview] = useState(false);
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
      status: isPreview ? STATUS.DRAFT : postStatus,
    };
    const redirectPath = isPreview ? `/blogs/${slug}/show` : routes.blogs;

    updatePost(
      { slug, payload },
      {
        onSuccess: () => {
          history.push(redirectPath);
        },
      }
    );
  };

  const handlePreview = () => {
    setIsPreview(true);
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

  if (isLoading || isFetching) return <PageLoader />;

  if (isError) return <ErrorMessage />;

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
          <Header
            isEdit
            handleDelete={handleDelete}
            handlePreview={handlePreview}
            handleStatusChange={handleStatusChange}
            status={postStatus}
            title="editBlogPost"
          />
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
