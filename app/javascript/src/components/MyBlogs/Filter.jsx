import React from "react";

import { Pane, Typography, Input, Select, Button } from "@bigbinary/neetoui";
import { Form } from "@bigbinary/neetoui/formik";
import { useTranslation } from "react-i18next";

import { FILTER_INITIAL_VALUES, FILTER_VALIDATION_SCHEMA } from "./constants";

const Filter = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { Header, Body, Footer } = Pane;

  return (
    <Pane isOpen={isOpen} onClose={onClose}>
      <Header>
        <Typography>{t("title.filter")}</Typography>
      </Header>
      <Form
        formikProps={{
          initialValues: FILTER_INITIAL_VALUES,
          validationSchema: FILTER_VALIDATION_SCHEMA,
        }}
      >
        <Body>
          <div className="w-full space-y-4">
            <Input label={t("labels.title")} />
            <Select label={t("labels.categories")} />
            <Select label={t("labels.status")} />
          </div>
        </Body>
        <Footer className="space-x-4">
          <Button className="bg-black" type="submit">
            {t("buttons.submit")}
          </Button>
          <Button style="secondary" type="reset">
            {t("buttons.clearFilters")}
          </Button>
        </Footer>
      </Form>
    </Pane>
  );
};

export default Filter;
