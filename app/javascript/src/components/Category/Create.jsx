import React from "react";

import { Modal, Typography, Button, Spinner } from "@bigbinary/neetoui";
import { Form, Input } from "@bigbinary/neetoui/formik";
import { useCreateCategory } from "hooks/reactQuery/useCategoriesApi";
import { useTranslation } from "react-i18next";

import {
  CATEGORY_INITIAL_VALUES,
  CATEGORY_VALIDATION_SCHEMA,
} from "./constants";

const Create = ({ isOpen, onClose }) => {
  const { Header, Body } = Modal;
  const { mutate: createCategory, isLoading } = useCreateCategory();
  const { t } = useTranslation();
  const handleSubmit = ({ name }) => {
    const payload = { name };
    createCategory(payload, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Modal closeButton isOpen={isOpen} onClose={onClose}>
      <Header className="flex items-center justify-between space-x-2">
        <Typography style="h2">{t("title.newCategory")}</Typography>
        {isLoading && <Spinner size="small" />}
      </Header>
      <Body>
        <Form
          formikProps={{
            initialValues: CATEGORY_INITIAL_VALUES,
            validationSchema: CATEGORY_VALIDATION_SCHEMA,
            onSubmit: handleSubmit,
          }}
        >
          <div className="space-y-4">
            <Input
              required
              label={t("labels.categoryName")}
              maxLength={125}
              name="name"
              placeholder={t("placeHolder.enterCategoryName")}
            />
            <div className="space-x-4">
              <Button
                className="bg-black"
                label={t("buttons.add")}
                type="submit"
              />
              <Button
                label={t("buttons.cancel")}
                style="secondary"
                onClick={onClose}
              />
            </div>
          </div>
        </Form>
      </Body>
    </Modal>
  );
};

export default Create;
