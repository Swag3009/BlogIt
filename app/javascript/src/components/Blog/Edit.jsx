import React from "react";

import { Typography, Button } from "@bigbinary/neetoui";
import { Form, Input, Textarea, Select } from "@bigbinary/neetoui/formik";
import { PageLoader } from "components/common";
import { useFetchCategories } from "hooks/reactQuery/useCategoriesApi";
import { useUpdatePost } from "hooks/reactQuery/usePostsApi";
import { pluck } from "ramda";
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from "react-router-dom";

import { POST_VALIDATION_SCHEMA } from "./constants";

import routes from "../../route";

const EditPost = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const { postData } = location.state || {};
  const { id, title, description, categories: selectedCategories } = postData;
  const { data: categories = [] } = useFetchCategories();
  const { mutate: updatePost, isLoading } = useUpdatePost();
  const POST_INITIAL_VALUES = {
    title,
    description,
    categories: selectedCategories || [],
  };

  const handleSubmit = ({ title, description, categories }) => {
    const payload = {
      title,
      description,
      category_ids: pluck("id", categories),
    };

    updatePost(
      { id, payload },
      {
        onSuccess: () => {
          history.push(routes.blogs);
        },
      }
    );
  };

  if (isLoading) return <PageLoader />;

  return (
    <div>
      <Typography className="mb-6" style="h1">
        {t("title.editBlogPost")}
      </Typography>
      <div className="flex-1 rounded-xl border bg-white p-8 shadow">
        <Form
          className="space-y-6"
          formikProps={{
            initialValues: POST_INITIAL_VALUES,
            validationSchema: POST_VALIDATION_SCHEMA,
            onSubmit: handleSubmit,
          }}
        >
          <Input
            required
            label={t("labels.title")}
            maxLength={125}
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
            maxLength={10000}
            name="description"
            placeholder={t("placeHolder.enterDescription")}
            rows={10}
          />
          <div className="flex justify-end space-x-6">
            <Button style="secondary" type="reset">
              {t("buttons.cancel")}
            </Button>
            <Button
              className="bg-black hover:bg-gray-600"
              style="primary"
              type="submit"
            >
              {t("buttons.submit")}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditPost;
