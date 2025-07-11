import React from "react";

import { Typography, Button } from "@bigbinary/neetoui";
import { Form, Input, Textarea, Select } from "@bigbinary/neetoui/formik";
import { Container, PageLoader } from "components/common";
import { useFetchCategories } from "hooks/reactQuery/useCategoriesApi";
import { useCreatePost } from "hooks/reactQuery/usePostsApi";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { POST_INITIAL_VALUES, POST_VALIDATION_SCHEMA } from "./constants";

import routes from "../../route";

const CreatePost = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { data: categories = [] } = useFetchCategories();
  const { mutate: createPost, isLoading } = useCreatePost();
  const handleSubmit = payload => {
    createPost(payload, {
      onSuccess: () => {
        history.push(routes.blogs);
      },
    });
  };

  if (isLoading) return <PageLoader />;

  return (
    <Container>
      <Typography className="mb-6" style="h1">
        {t("title.newBlogPost")}
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
            addButtonLabel="Add"
            label={t("labels.categories")}
            name="categories"
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
    </Container>
  );
};

export default CreatePost;
