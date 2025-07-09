import React from "react";

import { Typography, Button } from "@bigbinary/neetoui";
import { Form, Input, Textarea } from "@bigbinary/neetoui/formik";
import { Container, PageLoader } from "components/common";
import { useCreatePost } from "hooks/reactQuery/usePostsApi";
import Logger from "js-logger";
import { useHistory } from "react-router-dom";

import { POST_INITIAL_VALUES, POST_VALIDATION_SCHEMA } from "./constants";

import routes from "../../route";

const CreatePost = () => {
  const history = useHistory();
  const { mutate: createPost, isLoading } = useCreatePost();
  const handleSubmit = payload => {
    createPost(payload, {
      onSuccess: response => {
        Logger.info("Post Created", response.data);
        history.push(routes.blogs);
      },
      onError: error => {
        Logger.error("Error creating post:", error.response?.data);
      },
    });
  };

  if (isLoading) return <PageLoader />;

  return (
    <Container>
      <Typography className="mb-6" style="h1">
        New blog post
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
            label="Title"
            maxLength={125}
            name="title"
            placeholder="Enter title"
          />
          <Textarea
            required
            label="Description"
            maxLength={10000}
            name="description"
            placeholder="Enter Description"
            rows={10}
          />
          <div className="flex justify-end space-x-6">
            <Button style="secondary" type="reset">
              Cancel
            </Button>
            <Button
              className="bg-black hover:bg-gray-600"
              style="primary"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default CreatePost;
