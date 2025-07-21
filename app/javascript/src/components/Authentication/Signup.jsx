import React from "react";

import { Button, Typography } from "@bigbinary/neetoui";
import { Form, Input, Select } from "@bigbinary/neetoui/formik";
import { useSignUpUser } from "hooks/reactQuery/useAuthApi";
import { useFetchOrganizations } from "hooks/reactQuery/useOrganizationsApi";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import changeKeysLabelAndValue from "utils/changeKeysLabelAndValue";

import { SIGN_UP_INITIAL_VALUES, SIGN_UP_VALIDATION_SCHEMA } from "./constants";

import routes from "../../route";

const Signup = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const { data: organizations = [] } = useFetchOrganizations();
  const { mutate: signUp, isLoading } = useSignUpUser();
  const handleSubmit = ({
    name,
    email,
    organization,
    password,
    passwordConfirmation,
  }) => {
    const payload = {
      name,
      email,
      organization_id: organization.value,
      password,
      password_confirmation: passwordConfirmation,
    };

    signUp(payload, {
      onSuccess: () => {
        history.push(routes.blogs);
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-md space-y-6 p-8">
        <div className="text-center">
          <Typography style="h1">{t("title.signUp")}</Typography>
          <Link to={routes.signin}>
            <Typography
              className="cursor-pointer text-blue-700"
              style="body2"
              weight="semibold"
            >
              {t("title.orLoginNow")}
            </Typography>
          </Link>
        </div>
        <Form
          className="space-y-6"
          formikProps={{
            initialValues: SIGN_UP_INITIAL_VALUES,
            validationSchema: SIGN_UP_VALIDATION_SCHEMA,
            onSubmit: handleSubmit,
          }}
        >
          <Input
            required
            label={t("labels.name")}
            name="name"
            placeholder={t("placeHolder.enterName")}
          />
          <Input
            required
            label={t("labels.email")}
            name="email"
            placeholder={t("placeHolder.enterEmail")}
            type="email"
          />
          <Select
            required
            label={t("labels.organization")}
            name="organization"
            options={changeKeysLabelAndValue(organizations)}
            placeholder={t("placeHolder.selectOrganization")}
          />
          <Input
            required
            label={t("labels.password")}
            name="password"
            placeholder={t("placeHolder.enterPassword")}
            type="password"
          />
          <Input
            required
            label={t("labels.passwordConfirmation")}
            name="passwordConfirmation"
            placeholder={t("placeHolder.confirmPassword")}
            type="password"
          />
          <Button
            className="flex w-full justify-center rounded-md bg-blue-700 py-3 text-white hover:bg-blue-600"
            style="primary"
            type="submit"
          >
            {isLoading ? t("buttons.loading") : t("buttons.register")}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
