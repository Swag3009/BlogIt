import React, { useState } from "react";

import { Form, Input, Textarea, Select } from "@bigbinary/neetoui/formik";
import { PageLoader, Header } from "components/common";
import { STATUS } from "components/constant";
import { useFetchCategories } from "hooks/reactQuery/useCategoriesApi";
import { useCreatePost } from "hooks/reactQuery/usePostsApi";
import { pluck } from "ramda";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { POST_INITIAL_VALUES, POST_VALIDATION_SCHEMA, MAX } from "./constants";

import routes from "../../route";

const CreatePost = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { data: categories = [] } = useFetchCategories();
  const { mutate: createPost, isLoading } = useCreatePost();
  const [postStatus, setPostStatus] = useState(STATUS.DRAFT);

  const handleCreate = ({ title, description, categories }) => {
    const payload = {
      title,
      description,
      category_ids: pluck("id", categories),
      status: postStatus,
    };

    createPost(payload, {
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
          formikProps={{
            initialValues: POST_INITIAL_VALUES,
            validationSchema: POST_VALIDATION_SCHEMA,
            onSubmit: handleCreate,
          }}
        >
          <Header
            handleStatusChange={handleStatusChange}
            status={postStatus}
            title="newBlogPost"
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

export default CreatePost;
