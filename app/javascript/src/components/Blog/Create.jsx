import React from "react";

import { Typography, Button } from "@bigbinary/neetoui";
import { Form, Input, Textarea } from "@bigbinary/neetoui/formik";
import { Container } from "components/common";
import Logger from "js-logger";

import { POST_INITIAL_VALUES, POST_VALIDATION_SCHEMA } from "./constants";

const CreatePost = () => {
  const handleSubmit = values => {
    Logger.info("Submitted values", values);
  };

  return (
    <Container className="ml-16 p-6">
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
            <Button style="primary" type="submit" onSubmit={handleSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default CreatePost;
